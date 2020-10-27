'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/Fu-0Yc4ZS-w",
                name: "G.thiệu về khoá học lập trình vđk 8051 bằng ngôn ngữ C",
                imagePath: "/img/course/vdk.jpg",
                courseID: "1"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/lo6JL79IJGs",
                name: "Giải thích hàm Delay_ms",
                imagePath: "/img/course/vdk.jpg",
                courseID: "1"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/XrBOZnP9kZ0",
                name: "Hướng dẫn cắm TestBoard bài chớp tắt LED",
                imagePath: "/img/course/vdk.jpg",
                courseID: "1"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/hkYJ6lC91do",
                name: "Chớp tắt 8 LED và Tạo thư viện Delay (obsolete)",
                imagePath: "/img/course/vdk.jpg",
                courseID: "1"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/gmsVITBWX9c",
                name: "Chớp tắt xen kẽ 9 LED & Phát triển thư viện Delay",
                imagePath: "/img/course/vdk.jpg",
                courseID: "1"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/8rzBkXBp7Lk",
                name: "Kiến thức cơ bản để lập trình nhúng với C [1] | Basic knowledge to program embedded system",
                imagePath: "/img/course/Embed.png",
                courseID: "2"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/TxKEudqdd04",
                name: "Giới thiệu tổng quan về khóa học",
                imagePath: "/img/course/Embed.png",
                courseID: "2"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/watch?v=ZzVFff6IW5Q&list=PLpIpIip8G3sPd7ZUB7l7r53pCEs-I9-OA&index=6",
                name: "Kiến thức cơ bản để lập trình nhúng với C [2] | Basic knowledge to program embedded system",
                imagePath: "/img/course/Embed.png",
                courseID: "2"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/watch?v=yXEmknZvA84&list=PLpIpIip8G3sPd7ZUB7l7r53pCEs-I9-OA&index=7",
                name: "Hệ thống nhúng (Embedded system)",
                imagePath: "/img/course/Embed.png",
                courseID: "2"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/7x1PDHsQyGw",
                name: "Giới thiệu khóa học lập trình PHP&MySQL online",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/pzFS4e5thGs",
                name: "Cài đặt môi trường làm việc",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/vhyL7KmG6m8",
                name: "Web tĩnh: HTML (Phần 1)",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/tVhajt6Tr7U",
                name: "Web tĩnh: HTML (Phần 2)",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/L-okLKsR3b0",
                name: "Giới thiệu CSS",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/FzBSJ85LdJQ",
                name: "Truy cập đối tượng trong CSS",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/XaVouo_LdpY",
                name: "Các thuộc tính trong CSS",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/rXpEAfEtcEQ",
                name: "Khoảng cách Margin & Padding",
                imagePath: "/img/course/phpmysql.jpg",
                courseID: "3"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/YjVp1Vewcew",
                name: "Tạo Project NodeJS",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/Xg6QNwRmsm4",
                name: "Cài đặt module EXPRESS trong NodeJS",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/-hoa2Y4R86s",
                name: "Route trong NodeJS",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/Og8YPh61p4w",
                name: "Phương thức GET/POST tham số từ khách hàng",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/HysC-ZtKIy8",
                name: "Nhận dữ liệu với phương thức GET",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/IsfyUl0zG1I",
                name: "Nhận dữ liệu POST với BODY-PARSER",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/lrAiUJjjvls",
                name: "EJS Template Engine",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/xQqQVBfKNpE",
                name: "Lập trình trong EJS Engine",
                imagePath: "/img/course/nodejs.jpg",
                courseID: "4"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/qep03rEruZA",
                name: "Hướng dẫn cài đặt bootstrap + jquery",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/Pi710wgFGB0",
                name: "Học bootstrap qua ví dụ 2",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/KBEhlAoMzXM",
                name: "Học bootstrap qua ví dụ 3",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/KI5s7QKQPRI",
                name: "Thao tác lên tags html bằng jquery",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/5d1S4F3sd6A",
                name: "Xử lý sự kiện trong jquery (events in jquery)",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/KTtRAYMRWo8",
                name: "Viết trang web quản lý sinh viên bằng jquey + bootstrap phần 1",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/-POBvy0Ib8w",
                name: "Viết trang web quản lý sinh viên bằng jquey + bootstrap phần 2",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/_38AT8BwTe8",
                name: "Hướng dẫn học bootstrap qua ví dụ dự án web đồng hồ",
                imagePath: "/img/course/bootstrap.jpeg",
                courseID: "5"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/opmSs9qMFik",
                name: "Tổng quan khóa học",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/cA_My615iFk",
                name: "Tổng quan HTML",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/z699narBw_A",
                name: "Tổng quan CSS",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/ASpHS7BPZWA",
                name: "Cách dùng màu trong CSS",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/pnIcgkTDycY",
                name: "CSS model box",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/Pr58FL8fvK4",
                name: "ID, class và float",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/4EhbMESZZeo",
                name: "Position trong CSS",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/nJ7vdNg3PuM",
                name: "Hoàn thiện trang blog",
                imagePath: "/img/course/landingpage.jpg",
                courseID: "6"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/NDeFEFIe7yg",
                name: "Giới thiệu React Native",
                imagePath: "/img/course/reactnative.jpg",
                courseID: "7"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/H17BrNIHI0Y",
                name: "Cài đặt môi trường phát triển React Native",
                imagePath: "/img/course/reactnative.jpg",
                courseID: "7"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/sBjcKu7iqgg",
                name: "So sánh React DOM vs. React Native",
                imagePath: "/img/course/reactnative.jpg",
                courseID: "7"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/z1Q1CAh17w0",
                name: "Tạo React Native project dùng expo",
                imagePath: "/img/course/reactnative.jpg",
                courseID: "7"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/rcH4NbngPEk",
                name: "Giới thiệu Android",
                imagePath: "/img/course/androidcb.jpeg",
                courseID: "8"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/80ayldnOsSI",
                name: "Chức năng cơ bản của Android Studio",
                imagePath: "/img/course/androidcb.jpeg",
                courseID: "8"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/QQk0PhOxMV4",
                name: "Cài đặt máy ảo Android",
                imagePath: "/img/course/androidcb.jpeg",
                courseID: "8"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/v2WKdvG2TUA",
                name: "Cách debug cơ bản",
                imagePath: "/img/course/androidcb.jpeg",
                courseID: "8"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/9fr1ALB_5o0",
                name: "QUY TRÌNH THIẾT KẾ MÔT ỨNG DỤNG IOS",
                imagePath: "/img/course/ios.jpg",
                courseID: "9"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/h1SqaZGwFgk",
                name: "Đăng Ký Thành Viên",
                imagePath: "/img/course/ios.jpg",
                courseID: "9"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/cpRvFXjpx68",
                name: "Thiết kế máy tính điện tử",
                imagePath: "/img/course/ios.jpg",
                courseID: "9"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/yf-ssLQAKBQ",
                name: "Câu lệnh IF",
                imagePath: "/img/course/ios.jpg",
                courseID: "9"
            },

            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/Ih-cc-jWcrk",
                name: "Giới thiệu Series hướng dẫn lập trình android nâng cao",
                imagePath: "/img/course/androidnc.png",
                courseID: "10"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/caD1YrDW7Xs",
                name: "Shared Preferences trong android",
                imagePath: "/img/course/androidnc.png",
                courseID: "10"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/ou61qZfR4_k",
                name: "Internal Storage trong lập trình Android",
                imagePath: "/img/course/androidnc.png",
                courseID: "10"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/68Vxql5ulkg",
                name: "External Storage trong lập trình Android",
                imagePath: "/img/course/androidnc.png",
                courseID: "10"
            },
            {
                lessonNo: "1",
                urlLesson: "https://youtu.be/mrqVTfpRZCo?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "Tổng quan về loạt bài Học lập trình Java từ cơ bản đến nâng cao",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "2",
                urlLesson: "https://youtu.be/fG0AFANvafI",
                name: "Tạo Project, chạy chương trình, đổi tên class",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "3",
                urlLesson: "https://youtu.be/a6err_r4bbM?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "https://youtu.be/a6err_r4bbM?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "4",
                urlLesson: "https://youtu.be/ESMTRLDf2to?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "Lập trình Java trên Visual Studio Code",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "5",
                urlLesson: "https://youtu.be/qisr5Y-bTGw",
                name: "Các kiểu dữ liệu cơ bản trong Java",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "6",
                urlLesson: "https://youtu.be/kObhf1Whj_Q?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "Hằng số trong ngôn ngữ lập trình Java",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "7",
                urlLesson: "https://youtu.be/5lLcHtlkEys?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "Comment trong Java",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "8",
                urlLesson: "https://youtu.be/5TGwep2ZLvc?list=PLE1qPKuGSJaB4DMiP4wYbLjfszqKg89lL",
                name: "Một số kí tự có chức năng đặc biệt trong Java",
                imagePath: "/img/course/Javachuyennghiep.jpg",
                courseID: "11"
            },
            {
                lessonNo: "1",
                urlLesson: "https://youtu.be/KtHt2EOXq9s?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Tổng quan lập trình JAVA",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "2",
                urlLesson: "https://youtu.be/e6x1NWuVh-4?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "hần mềm học Java",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "3",
                urlLesson: "https://youtu.be/zUQm5xU5ex4?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Chương trình Java đầu tiên",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "4",
                urlLesson: "https://youtu.be/2uezOClAjaI?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Biên dịch tập tin java",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "5",
                urlLesson: "https://youtu.be/JGhCYVvDSqw?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Biến trong Java",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "6",
                urlLesson: "https://youtu.be/iPrShn4a9vc?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Tìm hiểu Package",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "7",
                urlLesson: "https://youtu.be/Z2b8Hm7dX3M?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Khai báo biến trong Java 01",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "8",
                urlLesson: "https://youtu.be/1LcZhNZbqNk?list=PLv6GftO355Av6u60DTCvrUe6aXror_bdE",
                name: "Khai báo biến trong Java 02",
                imagePath: "/img/course/Javacanban.jpg",
                courseID: "14"
            },
            {
                lessonNo: "1",
                urlLesson: "https://youtu.be/NZj6LI5a9vc?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Giới thiệu ngôn ngữ lập trình Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "2",
                urlLesson: "https://youtu.be/jf-q_dG8WzI?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Cài đặt môi trường Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "3",
                urlLesson: "https://youtu.be/QFxqY8qv42E?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Chạy file Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "4",
                urlLesson: "https://youtu.be/t3dERE9T5yg?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Comment trong Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "5",
                urlLesson: "https://youtu.be/nclE18Yl-kA?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Biến(Variable) trong Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "6",
                urlLesson: "https://youtu.be/IAVvgqDBiv0?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Kiểu số trong Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "7",
                urlLesson: "https://youtu.be/Vb6XWSLPQfg?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Kiểu chuỗi trong Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "8",
                urlLesson: "https://youtu.be/gzWriEOVjU0?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Kiểu chuỗi trong Python",
                imagePath: "/img/course/Pythoncanban.png",
                courseID: "12"
            },
            {
                lessonNo: "1",
                urlLesson: "https://youtu.be/LRUHnuHljPQ?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Kiểu chuỗi trong Python p3",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "2",
                urlLesson: "https://youtu.be/q2TNJMBx6GE",
                name: "Kiểu chuỗi trong Python",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "3",
                urlLesson: "https://youtu.be/u2Kd3weqPZE?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "Kiểu chuỗi trong Python",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "4",
                urlLesson: "https://youtu.be/UzTE665WXb8?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "List trong Python - Phần 1",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "5",
                urlLesson: "https://youtu.be/9IH3EynbcpU?list=PL33lvabfss1xczCv2BA0SaNJHu_VXsFtg",
                name: "List trong Python - Phần 2",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/dDFFCbRGm3o",
                name: "Tuple trong Python",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/gw9zbl2Q7r4",
                name: "Hashable và Unhashable trong Python",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/S-CWHkKiOBs",
                name: "Set trong Python",
                imagePath: "/img/course/pythonchuyennghiep.png",
                courseID: "13"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/4vAaxe6XR5A",
                name: "Hướng dẫn cài đặt Oracle database",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/mqJJ_wsxGQw",
                name: "Tạo Listener",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/jGB9wDV-9sc",
                name: "Tạo và khởi động DATABASE",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/X7dPxcuqCQU",
                name: "Tao và quản lý USERs",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/qA13B6a02TY",
                name: "Tạo và quản lý Tables",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/tpoJjW8Vrj8",
                name: "Thay đổi hiển thị DATETIME khi query, và những ảnh hưởng của nó đến hàm TO_DATE",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/Dy9_Cpx42VE",
                name: "ORMAT CODE, câu SQL hoặc PL/SQL trông chuyên nghiệp như chuyên gia",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/uxSqctTs6y8",
                name: "Hiển thị kết quả DBMS_OUTPUT.PUT_LINE trên SQL Developer",
                imagePath: "/img/course/Oracle.png",
                courseID: "16"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/2fanjSYVElY",
                name: "Giới thiệu SQL và SQL server",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/XUIm5VQlpJM",
                name: "Tạo database",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/TrLKdQH_Qng",
                name: "Tạo bảng",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/_40bzGOHloo",
                name: "Kiểu dữ liệu trong SQL",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/viVwygluDDY",
                name: "Insert, delete, update table",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/viVwygluDDY",
                name: "Tạo khóa chính",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "7",
                urlLesson: "https://www.youtube.com/embed/nm6qg6sinLU",
                name: "Tạo khóa ngoại",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "8",
                urlLesson: "https://www.youtube.com/embed/iZ9kQIke04A",
                name: "Truy vấn cơ bản",
                imagePath: "/img/course/Sqlserver.jpg",
                courseID: "15"
            },
            {
                lessonNo: "1",
                urlLesson: "https://www.youtube.com/embed/CxM-1kq2P5M",
                name: "Khái Niệm",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
            {
                lessonNo: "2",
                urlLesson: "https://www.youtube.com/embed/fA2pmJEdZpg",
                name: "Cách Xây dựng cơ sở dữ liệu",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
            {
                lessonNo: "3",
                urlLesson: "https://www.youtube.com/embed/FYdJWy6O6Fg",
                name: "Cách thức làm việc bằng mã SQL",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
            {
                lessonNo: "4",
                urlLesson: "https://www.youtube.com/embed/BM-YL7geTOc",
                name: "Lệnh SQL nâng caoPhần 1",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
            {
                lessonNo: "5",
                urlLesson: "https://www.youtube.com/embed/mP7KW_L9zuQ",
                name: "Lệnh SQL nâng cao phần 2",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
            {
                lessonNo: "6",
                urlLesson: "https://www.youtube.com/embed/XZbYJQ7wcRA",
                name: "Lệnh SQL nâng cao phần 3",
                imagePath: "/img/course/MySql.jpg",
                courseID: "17"
            },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Lessons', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Lessons", null, {});
    }
};