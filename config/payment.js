const partnerCode = 'MOMOXC1720220616';
const accessKey = 'qJCjWeQD5FRO0aRm';
const serectkey = 'Bbl5XAuMLBixUGF7uZAjttn1Iy0ybzXw';
const returnUrl = process.env.URL_CALLBACK || 'http://localhost:5000/comfirm';
const notifyurl =  process.env.URL_CALLBACK || 'http://localhost:5000/comfirm';
const requestType = "captureMoMoWallet";
const extraData = "key=test1";

module.exports =  {
    partnerCode,
    accessKey,
    serectkey,
    returnUrl,
    notifyurl,
    requestType,
    extraData
}