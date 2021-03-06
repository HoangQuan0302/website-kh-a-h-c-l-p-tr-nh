'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
    {
      name: "Khoá học lập trình vđk 8051 bằng ngôn ngữ C",
      description: "Lập trình các ứng dụng cơ bản của vi điều khiển 8051: Led đơn, phím bấm, led 7 thanh, LCD, timer, counter, ngắt.Kết hợp các bài toán thực hành làm một Project hoàn chỉnh cuối khóa ra một sản phẩm thật.",
      price:"5000000",
      imagePath: "/img/course/vdk.jpg",
      NoVideos:"5",
      priceDis: "7500000",
      startedAt: "05/25/2020",
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"3",
      userID:"3",
      skillID:"5"
    },
    {
      name: "Khoá học Embedded- hệ thống nhúng",
      description: "Hệ thống nhúng sử dụng nền tảng phần cứng để thực thi các hoạt động. Phần cứng của hệ thống nhúng được lắp ráp cùng với bộ vi xử lý / vi điều khiển.",
      price:"4000000",
      imagePath: "/img/course/Embed.png", 
      NoVideos:"4",
      priceDis: "6000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"3" , 
      userID:"3",
      skillID:"13",
      NumberStudent:"20"
    },
    {
      name:"Lập trình PHP & MySQL", 
      description:"PHP hiện đang là một trong các ngôn ngữ thiết kế web mạnh nhất thế giới. Đặc biệt, PHP chỉ cần 3 tháng là bạn đã có thể làm chủ được công nghệ này. Khoa Phạm giới thiệu Khóa học lập trình PHP & MySQL cơ bản dành cho tất cả mọi đối tượng.", 
      price:"4500000", 
      imagePath:"/img/course/phpmysql.jpg", 
      NoVideos:"8", 
      priceDis:"5000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"1", 
      userID:"4",
      skillID:"2",
      NumberStudent:"22"
    },
    {
      name:"Lập trình NodeJS", 
      description:"Khóa học sẽ giúp bạn làm chủ những kiến thức NODEJS. Khóa học đưa bạn tiếp cận với môi trường làm việc thực tế từ A-Z, giúp bạn tự tin khi xin phỏng vấn. Hoàn tất khóa học, bạn sẽ có ít nhất 05 project hoàn chỉnh thực tế chạy trên nền tảng NODEJS Trang web thương mại điện tử, app Chat online, Game đa nền tảng iOS + Android + Web.Hoàn tất khóa học, bạn sẽ đủ khả năng ứng tuyển vào các công ty Lập trình NodeJS", 
      price:"3000000", 
      imagePath:"/img/course/nodejs.jpg", 
      NoVideos:"8", 
      priceDis:"4000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"1", 
      userID:"4",
      skillID:"1",
      NumberStudent:"28"
    },
    {
      name:"Lập trình bằng Bootstrap", 
      description:"Bootstrap là 1 framework JavaScript, CSS và HTML miễn phí và phổ biến nhất trong việc thiết kế giao diện web đáp ứng trên di động.", 
      price:"3000000", 
      imagePath:"/img/course/bootstrap.jpeg", 
      NoVideos:"8", 
      priceDis:"4000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"1", 
      userID:"4",
      skillID:"8",
      NumberStudent:"30"
    },
    {
      name:"Lập trình Front-End với Landing page", 
      description:"Nếu bạn yêu thích lập trình web nhưng còn lơ ngơ không biết bắt đầu từ đâu hay đã biết cơ bản mà chưa làm được một sản phẩm nhất định nào, thì đây chính là khóa học dành cho bạn – LẬP TRÌNH FRONT END CƠ BẢN VỚI WEBSITE LANDING PAGE.", 
      price:"1000000", 
      imagePath:"/img/course/landingpage.jpg", 
      NoVideos:"8", 
      priceDis:"2000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"1",
      categoryID:"1", 
      userID:"4",
      skillID:"8",
      NumberStudent:"22"
    },
    {
      name:"Lập trình Mobile với React Native", 
      description:"Khóa học cung cấp kiến thức về lập trình Mobile cơ bản.", 
      price:"3000000", 
      imagePath:"/img/course/reactnative.jpg", 
      NoVideos:"4", 
      priceDis:"4000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"2", 
      userID:"5",
      skillID:"14",
      NumberStudent:"29"
    },
    {
      name:"Lập trình Android Cơ bản", 
      description:"Khóa học cung cấp kiến thức về lập trình Android cơ bản.", 
      price:"1000000", 
      imagePath:"/img/course/androidcb.jpeg", 
      NoVideos:"4", 
      priceDis:"2000000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"1",
      categoryID:"2", 
      userID:"5",
      skillID:"15",
      NumberStudent:"30"
    },
    {
      name:"Lập trình iOS (Swift)", 
      description:"Cả thế giới đã công nhận rằng: Sự thành công của iPhone phần lớn đến từ nền tảng iOS, không chỉ được tối ưu với phần cứng, nền tảng này còn có tính bảo mật cao. Apple cùng với những chiếc iPhone đã thay đổi hoàn toàn lịch sử của ngành công nghệ di động, mở ra những khái niệm hoàn toàn mới khiến các hãng cạnh tranh luôn phải chạy theo. Song song với sự thành công của thiết bị chính là hệ điều hành iOS độc quyền của hãng. Năm 2016, bên cạnh những chiếc iPhone, iPad, chúng ta sẽ được chứng kiến những bom tấn ra mắt như Apple Watch, Apple Tivi và còn biết bao nhiêu bí mật khác mà Apple đang chuẩn bị bung ra thị trường. Cũng chính vì vậy, mà việc làm dành cho những Lập trình viên iOS sẽ ngày càng tăng dữ dội. Hãy cùng chúng tôi nắm bắt kỹ thuật Lập trình iOS, cũng như nắm bắt lấy cơ hội việc làm của chính mình nhé.", 
      price:"2000000", 
      imagePath:"/img/course/ios.jpg", 
      NoVideos:"4", 
      priceDis:"2500000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"2", 
      userID:"5",
      skillID:"16",
      NumberStudent:"21"
    },
    {
      name:"Lập trình android nâng cao", 
      description:"Khóa học cung cấp kiến thức về lập trình Android nâng cao.", 
      price:"1000000", 
      imagePath:"/img/course/androidnc.png", 
      NoVideos:"4", 
      priceDis:"2500000", 
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020", 
      objectId:"2",
      categoryID:"2", 
      userID:"5",
      skillID:"15",
      NumberStudent:"25"
    },
    {
      name:"Lập trình Java chuyên nghiệp",
      description:"Khóa học này giảng dạy những kiến thức từ cơ bản đến nâng cao và những kỹ năng để viết ứng dụng Java chuyên nghiệp.",
      price:"1800000",
      imagePath:"/img/course/Javachuyennghiep.jpg",
      NoVideos:"20",
      priceDis:"200000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"4",
      userID:"6",
      skillID:"3",
      NumberStudent:"26"
    },
	  {
      name:"Khóa học lập trình Python căn bản",
      description:"Khóa học này trình bày những kiến thức cơ bản về ngôn ngữ lập trình Python như cài đặt và sử dụng Python",
      price:"1500000",
      imagePath:"/img/course/Pythoncanban.png",
      NoVideos:"20",
      priceDis:"200000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"1",
      categoryID:"4",
      userID:"6",
      skillID:"17",
      NumberStudent:"20"
    },
	  {
      name:"Khóa học lập trình Python nâng cao",
      description:" Khóa học này trình bày khai báo và sử dụng biến, kiểu dữ liệu, biểu thức, hàm/thủ tục, quản lý file, sử dụng thư viện và các kỹ thuật giúp các bạn xây dựng ứng dụng dùng ngôn ngữ Python. ",
      price:"2000000",
      imagePath:"/img/course/pythonchuyennghiep.png",
      NoVideos:"25",
      priceDis:"250000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"4",
      userID:"6",
      skillID:"17",
      NumberStudent:"24"
    },
	  {
      name:"Khóa học lập trình Java căn bản",
      description:"Khóa học lập trình Java căn bản dành cho các bạn mới bắt đầu tìm hiểu về Java cung cấp cho các bạn cách sử dụng cú pháp, nền tảng lập trình hướng đối tượng và cách làm việc với ứng dụng Java",
      price:"1500000",
      imagePath:"/img/course/Javacanban.jpg",
      NoVideos:"20",
      priceDis:"200000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"1",
      categoryID:"4",
      userID:"6",
      skillID:"3",
      NumberStudent:"27"
    },
    {
      name:"Khóa học cơ sở dữ liệu SQL server",
      description:"Khóa học cung cấp cho bạn những kiến thức về quản trị, phân tích và thiết kế cơ sở dữ liệu trong SQL server",
      price:"1200000",
      imagePath:"/img/course/Sqlserver.jpg",
      NoVideos:"25",
      priceDis:"200000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"1",
      categoryID:"5",
      userID:"7",
      skillID:"11",
      NumberStudent:"32"
    },
	  {
      name:"Khóa học Oracle Database",
      description:"là khóa học quản trị cơ sở dữ liệu giúp người học khám phá, quản lý, di chuyển, sao lưu,phục hồi… cơ sở dữ liệu nhằm giữ gìn và tăng tính linh động, đồng thời dễ quản lý cơ sở dữ liệu ở các doanh nghiệp.",
      price:"2500000",
      imagePath:"/img/course/Oracle.png",
      NoVideos:"30",
      priceDis:"300000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"5",
      userID:"7",
      skillID:"12",
      NumberStudent:"14"
    },
	  {
      name:"Khóa học thiết kế Database và truy vấn CSDL với MySQL",
      description:"Cho bạn khả năng triển khai một Database với các bảng dữ liệu, cột (column), và các chỉ mục (Index), bảo đảm Referential Integrity (có thể dịch là toàn vẹn quan hệ) giữa các hàng và các bảng đa dạng, cập nhật tự động các chỉ mục, thông dịch một truy vấn SQL và tổ hợp thông tin từ các bảng khác nhau.",
      price:"500000",
      imagePath:"/img/course/MySql.jpg",
      NoVideos:"10",
      priceDis:"6000000",
      startedAt: "05/25/2020", 
      endedAt:"07/29/2020",
      objectId:"2",
      categoryID:"5",
      userID:"7",
      skillID:"10",
      NumberStudent:"27"
    }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
      return queryInterface.bulkInsert('Courses',data,{});
  },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Courses", null, {});
    }
};