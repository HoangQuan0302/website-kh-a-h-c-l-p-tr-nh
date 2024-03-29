let express = require('express');
let router = express.Router();
let voucherController = require('../controllers/voucherController');
let billController = require('../controllers/billController');
let courseController = require('../controllers/courseController');

let app = express();

router.get('/vnpay', (req, res) => {
    var dateFormat = require('dateformat');
    var date = new Date();
    var desc = 'Thanh toan don hang thoi gian: ' + dateFormat(date, 'HH:mm:ss dd-mm-yyyy');
    let totalPrice = req.session.cart.totalPrice;
    res.render('vnpay', {
        description: desc,
        totalPrice: totalPrice
    });
    
})

router.get('/momo',(req, res)=>{
    var dateFormat=require('dateformat');
    var date=new Date();
    var desc = 'Thanh toan don hang thoi gian: ' + dateFormat(date, 'HH:mm:ss dd-mm-yyyy');
    let totalPrice = req.session.cart.totalPrice;
    let CourseId=req.session.cart.courseID
    res.render('momo',{
        description:desc,
        totalPrice: totalPrice,
        courseId:CourseId
    })
})

router.get('/', (req, res) => {
    res.render('phuongthucthanhtoan')
})

router.post('/vnpay', (req, res, next) => {
    var ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    var config = require('config');
    var dateFormat = require('dateformat');

    var tmnCode = config.get('vnp_TmnCode');
    var secretKey = config.get('vnp_HashSecret');
    var vnpUrl = config.get('vnp_Url');
    var returnUrl = config.get('vnp_ReturnUrl');
    var date = new Date();

    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    var bankCode = req.body.bankCode;
    var orderInfo = req.body.orderDescription;
    var orderType = req.body.orderType;
    var amount = req.session.cart.totalPrice;
    var locale = req.body.language;
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);
    var querystring = require('qs');
    var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

    var sha256 = require('sha256');

    var secureHash = sha256(signData);
    vnp_Params['vnp_SecureHashType'] = 'SHA256';
    vnp_Params['vnp_SecureHash'] = secureHash;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });
    //Neu muon dung Redirect thi dong dong ben duoi
    //res.status(200).json({code: '00', data: vnpUrl})
    //Neu muon dung Redirect thi mo dong ben duoi va dong dong ben tren
    res.redirect(vnpUrl)
});


// Lưu ý: Vì không xin được vnpay_ipn url (để check và cập nhật vào DB) từ vnpay nên cập nhật kết quả lưu theo return url, nếu reset link vẫn sẽ lưu kết quả vào DB.
router.get('/vnpay_return', async (req, res, next) => {
    var vnp_Params = req.query;

    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    var config = require('config');
    var tmnCode = config.get('vnp_TmnCode');
    var secretKey = config.get('vnp_HashSecret');

    var querystring = require('qs');
    var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });
    vnp_Params.vnp_Amount = vnp_Params.vnp_Amount / 100;

    var sha256 = require('sha256');

    var checkSum = sha256(signData);

    if (secureHash === checkSum) {
        try {
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            // Add Bills
            let voucherID = null;
            let voucherCode = req.session.cart.voucherCode;
            let percentDis = 0;
            let cart = req.session.cart;
            if (voucherCode != null) {
                voucher = await voucherController.getVoucherByCode(voucherCode);
                voucherID = voucher.id;
                percentDis = voucher.priceDiscount;
            }
            let bill = {
                userID: req.session.user.userID,
                voucherID: voucherID,
                revenue: vnp_Params.vnp_Amount,
                paymentMethod: "vnpay"
            }
            let BillAdded = await billController.addBill(bill);
            // Add Bill Details and User_Courses
            for (let i in cart.items) {
                let price = cart.items[i].item.price * (1 - percentDis);
                let bill_detail = {
                    billID: BillAdded.billID,
                    courseID: cart.items[i].item.courseID,
                    price: price
                };
                let user_course = {
                    courseID: cart.items[i].item.courseID,
                    userID : req.session.user.userID
                }
                await billController.addBill_detail(bill_detail);
                await courseController.addUser_course(user_course);
            }
            req.session.cart.empty();
            res.render('success_vnpay', { 
                vnp_Params: vnp_Params,
                billID: BillAdded.billID
             });
        }
        catch (err) {
            next(err);
        }
    }
});

router.get('/vnpay_ipn', (req, res, next) => {
    var vnp_Params = req.query;
    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    var config = require('config');
    var secretKey = config.get('vnp_HashSecret');
    var querystring = require('qs');
    var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });
    var sha256 = require('sha256');
    var checkSum = sha256(signData);

    if (secureHash === checkSum) {
        var orderId = vnp_Params['vnp_TxnRef'];
        var rspCode = vnp_Params['vnp_ResponseCode'];
        var status = 'GD Thành công';
        if (rspCode != '00') {
            status = 'GD Thất bại';
        }
        const newPayment = new Payment({
            amount: vnp_Params['vnp_Amount'],
            description: vnp_Params['vnp_OrderInfo'],
            status: status
        })
        newPayment.save().then(
            res.status(200).json({ RspCode: '00', Message: 'success' })
        ).catch(
            res.status(200).json({ RspCode: '99', Message: 'Other failure' })
        )
    }
    else {
        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' })
    }
});

function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }
    a.sort();
    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}

router.get('/test', (req, res, next) => {
    let currentCart = req.session.cart;
    let length = currentCart.items;
    for (let i in length) {
        console.log(length[i].item.courseID);
    }
    res.send(length);
});

const MoMo = require('../config/payment');
const crypto = require('crypto');
const https = require('https');
router.post('/momo', async (request, response) => {
    // if (!request.isAuthenticated()){
    //     response.redirect('/login/');
    //     return; 
    // }
    // Tạo mã requestId
    const requestId = 'REQ' + getRndInteger(100,1000);
    // Số tiền giao dịch
    const amount = request.body.amount;
    console.log(amount);
    // tạo mã đơn hàng orderId
    
    const orderId = 'OR' + request.params.id + getRndInteger(100,1000);
    const orderInfo = `${request.session.user.userID},${request.params.courseId}`;
    var rawSignature = "partnerCode=" + MoMo.partnerCode + "&accessKey=" + MoMo.accessKey + "&requestId=" + requestId + "&amount=" + amount + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&returnUrl=" + MoMo.returnUrl + "&notifyUrl=" + MoMo.notifyurl + "&extraData=" + MoMo.extraData;
    var signature = crypto.createHmac('sha256', MoMo.serectkey)
        .update(rawSignature)
        .digest('hex');
    
    var body = JSON.stringify({
        partnerCode: MoMo.partnerCode,
        accessKey: MoMo.accessKey,
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        returnUrl: MoMo.returnUrl,
        notifyUrl: MoMo.notifyurl,
        extraData: MoMo.extraData,
        requestType: MoMo.requestType,
        signature: signature,
    })
    console.log(body);
    var options = {
        hostname: 'test-payment.momo.vn',
        port: 443,
        path: '/gw_payment/transactionProcessor',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body)
        }
    };
    console.log(options);
    var req = await https.request(options, (res) => {
        res.setEncoding('utf8');
        res.on('data', (body) => {
            response.redirect(JSON.parse(body).payUrl);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });
    req.write(body);
    req.end();
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

router.get('/comfirm', async (req, res) => {
    db._connect();
    var data = Object.assign([], req.query);
    data.isSuccess = false;
    if(req.query.errorCode == '0'){
        data.isSuccess = true;
        console.log(req.query)
        try {
            const exDataMoMo = req.query.orderInfo.split(',');
            const belongTo = exDataMoMo[0] || null;
            const courseId = exDataMoMo[1] || null;
            if(courseId == 'cart'){
                const cartBeforeDelete = await ChucNang.findOne({belongTo});
                await ChucNang.findOneAndUpdate({belongTo}, { $push: { KhoaHocDaMua: cartBeforeDelete.GioHang},GioHang: [] })
                db._disconnect();
                return res.render('comfirm', {data: data});
            }
            const result = await KhoaHoc.findById(courseId).lean();
            console.log(result)
            if(result){
                const checkBelongUser = await ChucNang.findOne({belongTo}).lean();
                if(!checkBelongUser){
                    let newKhoaHocDaMua = new ChucNang({belongTo, KhoaHocDaMua: [courseId]});
                    await newKhoaHocDaMua.save();
                }else{
                    await ChucNang.findByIdAndUpdate(checkBelongUser._id, { $push: { KhoaHocDaMua: courseId } })
                }
                await ChucNang.findByIdAndUpdate(checkBelongUser._id, { $pull: { GioHang: courseId } })
            }
        } catch (error) {
            console.log(error);
        }
    }
    db._disconnect();
    res.render('comfirm', {data: data});
})

module.exports = router;