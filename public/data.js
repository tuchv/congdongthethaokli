// ==========================================================================
// CỘNG ĐỒNG THỂ THAO KLI - DATA CONFIGURATION
// File quản lý dữ liệu hiển thị trên Website
// Dành cho Ban Quản trị & Nhân viên nội dung Kli Sports Community
// ==========================================================================

const KLI_CONFIG = {
  brand: {
    name: "Cộng Đồng Thể Thao KLI",
    shortName: "KLI SPORTS",
    tagline: "Kết nối đam mê - Vững vàng nhịp tập",
    subTagline: "Nền tảng hỗ trợ hội viên tìm kiếm phòng tập, sân bãi thể thao và huấn luyện viên uy tín trên toàn quốc.",
    hotline: "0988.123.456",
    zaloGroup: "https://zalo.me/g/klisports",
    fbGroup: "https://facebook.com/groups/congdongthethaokli",
    verifiedBadgeText: "Đối tác KLI Đã Xác Thực"
  },

  stats: [
    { value: "15,000+", label: "Hội viên Kli năng động" },
    { value: "180+", label: "Phòng tập & Sân bãi liên kết" },
    { value: "95+", label: "HLV & Chuyên gia đối tác" },
    { value: "100%", label: "Hỗ trợ hội viên Cali chuyển đổi" }
  ],

  categories: [
    { id: "all", name: "Tất cả", icon: "🔥" },
    { id: "gym", name: "Gym & Fitness", icon: "🏋️‍♂️" },
    { id: "group-x", name: "Group X & Dance", icon: "💃" },
    { id: "yoga", name: "Yoga & Pilates", icon: "🧘‍♀️" },
    { id: "indoor", name: "Pickleball & Cầu lông", icon: "🏸" },
    { id: "swimming", name: "Bơi lội", icon: "🏊‍♂️" },
    { id: "outdoor", name: "Tennis & Chạy bộ", icon: "🎾" }
  ],

  regions: [
    { id: "ha-noi", name: "Hà Nội" },
    { id: "hcm", name: "Hồ Chí Minh" },
    { id: "da-nang", name: "Đà Nẵng" },
    { id: "bien-hoa", name: "Đồng Nai (Biên Hòa)" }
  ],

  areas: [
    { id: "all", name: "Tất cả khu vực", region: "all" },
    // Hà Nội
    { id: "le-van-luong", name: "Lê Văn Lương / Thanh Xuân", region: "ha-noi" },
    { id: "cau-giay", name: "Cầu Giấy", region: "ha-noi" },
    { id: "dong-da", name: "Đống Đa", region: "ha-noi" },
    { id: "tay-ho", name: "Tây Hồ", region: "ha-noi" },
    { id: "long-bien", name: "Long Biên", region: "ha-noi" },
    { id: "hai-ba-trung", name: "Hai Bà Trưng", region: "ha-noi" },
    { id: "nam-tu-liem", name: "Nam Từ Liêm / Mỹ Đình", region: "ha-noi" },
    // HCM
    { id: "quan-7", name: "Quận 7 (Phú Mỹ Hưng)", region: "hcm" },
    { id: "quan-1", name: "Quận 1", region: "hcm" },
    { id: "binh-thanh", name: "Bình Thạnh", region: "hcm" },
    { id: "thu-duc", name: "TP. Thủ Đức", region: "hcm" },
    // Đà Nẵng & Biên Hòa
    { id: "hai-chau", name: "Hải Châu (Đà Nẵng)", region: "da-nang" },
    { id: "bien-hoa-center", name: "TP. Biên Hòa", region: "bien-hoa" }
  ],

  locations: [
    {
      id: "loc-1",
      name: "Nova Fitness & Yoga Lê Văn Lương",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "le-van-luong",
      areaName: "Lê Văn Lương",
      address: "Tầng 3, Tòa nhà Golden Palm, 21 Lê Văn Lương, Nhân Chính, Thanh Xuân",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviewsCount: 142,
      priceRange: "Từ 450.000đ/tháng",
      badge: "Hỗ trợ Cali",
      specialOffer: "Hỗ trợ bảo lưu & quy đổi gói tập California Fitness đến 80%. Tặng 02 buổi PT.",
      description: "Tổ hợp thể thao 5 sao rộng hơn 1.800m2 với đầy đủ khu tạ tự do, máy Technogym, phòng Group X âm thanh đỉnh cao và phòng Yoga tường đá muối Himalaya.",
      facilities: ["Phòng tắm nóng lạnh", "Tủ Locker vân tay", "Xông hơi đá muối", "Bãi đỗ ô tô miễn phí", "InBody test định kỳ"],
      phone: "0904.888.222",
      isFeatured: true
    },
    {
      id: "loc-2",
      name: "Group X Paul Kent Studio",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "group-x",
      sportName: "Group X & Dance",
      area: "le-van-luong",
      areaName: "Nguyễn Thị Định",
      address: "125 Nguyễn Thị Định, Trung Hòa, Cầu Giấy, Hà Nội",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      reviewsCount: 98,
      priceRange: "Từ 50.000đ/buổi",
      badge: "HLV Cali Gốc",
      specialOffer: "Gặp lại các Master Trainer ruột của Cali: BodyCombat, BodyPump, Zumba, Sexy Dance.",
      description: "Studio chuyên biệt dành riêng cho tín đồ Group X được sáng lập bởi cựu HLV Trưởng của California Fitness. Không gian bùng nổ năng lượng, hệ thống ánh sáng chuẩn festival.",
      facilities: ["Sàn gỗ giảm chấn", "Hệ thống âm thanh biểu diễn", "Nước detox miễn phí", "Khu vực check-in sống ảo"],
      phone: "0936.111.333",
      isFeatured: true
    },
    {
      id: "loc-3",
      name: "8Fit Boutique Studio Phú Mỹ Hưng",
      region: "hcm",
      regionName: "TP. Hồ Chí Minh",
      sport: "group-x",
      sportName: "Group X & Dance",
      area: "quan-7",
      areaName: "Quận 7",
      address: "Khu Phố Sky Garden 3, Phạm Văn Nghị, Tân Phong, Quận 7, TP.HCM",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviewsCount: 86,
      priceRange: "Từ 600.000đ/tháng",
      badge: "Cộng đồng Kli Ưu đãi",
      specialOffer: "Giảm 30% cho hội viên Kli xuất trình thẻ Cali hoặc app Kli.",
      description: "Studio hiện đại phong cách boutique tại trung tâm Phú Mỹ Hưng, chuyên các lớp Les Mills bản quyền thế giới, HIIT năng lượng cao và Yoga trị liệu cột sống.",
      facilities: ["Lớp học quy mô nhỏ (Max 15 người)", "Giáo trình LesMills quốc tế", "Phòng thay đồ sang trọng", "Khăn tập miễn phí"],
      phone: "0977.234.567",
      isFeatured: true
    },
    {
      id: "loc-4",
      name: "MVP Fitness Cầu Giấy",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "cau-giay",
      areaName: "Cầu Giấy",
      address: "Tầng 4, Tòa Nhà CVI, D27 Khu Đô Thị Mới Cầu Giấy, Hà Nội",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviewsCount: 115,
      priceRange: "Từ 400.000đ/tháng",
      badge: "Tập Thử Miễn Phí",
      specialOffer: "Hội viên Kli & cựu hội viên Cali được tập miễn phí 30 ngày trải nghiệm không ràng buộc.",
      description: "Không gian tập luyện tràn ngập ánh sáng tự nhiên với máy tập LifeFitness cao cấp. Đội ngũ PT tận tâm, nói không với chèo kéo mua gói dịch vụ.",
      facilities: ["Khu tập chức năng Functional", "Máy đo chỉ số InBody 270", "Bể ngâm lạnh phục hồi cơ", "Thảm tạ chuyên dụng"],
      phone: "0912.444.888",
      isFeatured: true
    },
    {
      id: "loc-5",
      name: "VinaFit Sunshine Riverside Tây Hồ",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "tay-ho",
      areaName: "Tây Hồ",
      address: "Tầng 2, Tòa R1 Sunshine Riverside, KĐT Ciputra, Tây Hồ, Hà Nội",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviewsCount: 79,
      priceRange: "Từ 550.000đ/tháng",
      badge: "Tây Hồ View Đẹp",
      specialOffer: "Gia hạn thẻ ưu đãi tặng thêm 03 tháng khi đăng ký nhóm 2 người.",
      description: "Tọa lạc tại khu đô thị quốc tế Ciputra, view nhìn ra sông Hồng thơ mộng, không khí trong lành, trang thiết bị đồng bộ tiêu chuẩn Châu Âu.",
      facilities: ["View sông Hồng lộng gió", "Khu vực Sauna cao cấp", "Bãi xe thuận tiện", "Quầy Bar Protein sinh tố"],
      phone: "0968.999.111",
      isFeatured: true
    },
    {
      id: "loc-6",
      name: "CLB Pickleball & Tennis Long Biên",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "indoor",
      sportName: "Pickleball & Cầu lông",
      area: "long-bien",
      areaName: "Long Biên",
      address: "Số 5 Cổ Linh, Phường Long Biên, Quận Long Biên, Hà Nội",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviewsCount: 132,
      priceRange: "120.000đ - 220.000đ/giờ",
      badge: "Bộ Môn Thịnh Hành",
      specialOffer: "Miễn phí mượn vợt Pickleball chất lượng cao cho hội viên nhóm Kli vào khung giờ trưa.",
      description: "Cụm 8 sân Pickleball trong nhà có mái che thông minh và hệ thống điều hòa gió tươi, mặt sân sơn chuẩn thi đấu quốc tế, không lo mưa nắng.",
      facilities: ["Mái che cao 12m", "Hệ thống chiếu sáng LED chống lóa", "Cho thuê vợt & bóng", "Ghế ngồi khán giả thoải mái"],
      phone: "0983.333.666",
      isFeatured: true
    },
    {
      id: "loc-7",
      name: "Royal Yoga & Pilates Trị Liệu Thái Thịnh",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "yoga",
      sportName: "Yoga & Pilates",
      area: "dong-da",
      areaName: "Đống Đa",
      address: "135 Thái Thịnh, Thịnh Quang, Đống Đa, Hà Nội",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      reviewsCount: 64,
      priceRange: "Từ 500.000đ/tháng",
      badge: "Yoga Chuyên Sâu",
      specialOffer: "Ưu đãi chuyển đổi gói Yoga Cali - tặng 01 tuần trải nghiệm Pilates Reformer.",
      description: "Trung tâm Yoga tĩnh tâm với 100% Master Ấn Độ và giảng viên chuyên sâu về phục hồi đau mỏi cổ vai gáy, thoát vị đĩa đệm và điều hòa hơi thở.",
      facilities: ["Thảm Manduka cao cấp", "Phòng tập xông tinh dầu thiên nhiên", "Trà thảo mộc ấm miễn phí", "Tủ gửi đồ an toàn"],
      phone: "0944.555.777",
      isFeatured: false
    },
    {
      id: "loc-8",
      name: "Bể Bơi Bốn Mùa & Fitness Times City",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "swimming",
      sportName: "Bơi lội",
      area: "hai-ba-trung",
      areaName: "Hai Bà Trưng",
      address: "Tầng B2, Tòa T18 KĐT Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội",
      image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviewsCount: 153,
      priceRange: "Vé lẻ từ 100.000đ",
      badge: "Nước Ấm 4 Mùa",
      specialOffer: "Gói vé tháng liên kết giảm 25% cho cộng đồng thành viên Kli.",
      description: "Bể bơi nước ấm chuẩn Olympic sử dụng công nghệ lọc điện phân muối không cay mắt, nhiệt độ nước luôn duy trì 31 độ C quanh năm.",
      facilities: ["Lọc nước điện phân muối", "Nhiệt độ ổn định 31°C", "Khu bơi trẻ em riêng biệt", "HLV bơi kèm 1:1"],
      phone: "0902.123.789",
      isFeatured: false
    },
    {
      id: "loc-9",
      name: "Elite Dynamic Fitness & Pool Thảo Điền",
      region: "hcm",
      regionName: "TP. Hồ Chí Minh",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "thu-duc",
      areaName: "TP. Thủ Đức",
      address: "12 Quốc Hương, Thảo Điền, TP. Thủ Đức, TP.HCM",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviewsCount: 110,
      priceRange: "Từ 750.000đ/tháng",
      badge: "Không Gian Xanh",
      specialOffer: "Chính sách chào đón hội viên Cali: Tặng 1 tháng khi đăng ký gói 6 tháng.",
      description: "Không gian xanh mát mắt giữa lòng Thảo Điền, phòng tập trang bị dàn máy Hammer Strength thế hệ mới cùng bể bơi vô cực ngoài trời.",
      facilities: ["Bể bơi vô cực", "Dàn máy Hammer Strength", "Khu lounge cafe làm việc", "Khăn tắm & đồ dùng cao cấp"],
      phone: "0909.876.543",
      isFeatured: false
    },
    {
      id: "loc-10",
      name: "Sân Cầu Lông & Pickleball Cầu Giấy Sports Center",
      region: "ha-noi",
      regionName: "Hà Nội",
      sport: "indoor",
      sportName: "Pickleball & Cầu lông",
      area: "cau-giay",
      areaName: "Cầu Giấy",
      address: "35 Trần Quý Kiên, Dịch Vọng, Cầu Giấy, Hà Nội",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviewsCount: 92,
      priceRange: "80.000đ - 160.000đ/giờ",
      badge: "Sân Đạt Chuẩn",
      specialOffer: "Ưu tiên giữ sân giờ vàng cho các đội nhóm thể thao Kli.",
      description: "Khu phức hợp thể thao 12 sân cầu lông và 4 sân pickleball thảm tiêu chuẩn BWF, trần cao thoáng đãng, hệ thống ánh sáng chống chói mắt.",
      facilities: ["Thảm BWF thi đấu", "Căng tin giải khát thể thao", "Chỗ đậu xe máy & ô tô rộng rãi", "Phòng thay đồ sạch sẽ"],
      phone: "0915.678.901",
      isFeatured: false
    },
    {
      id: "loc-11",
      name: "Danang Riverside Active Club",
      region: "da-nang",
      regionName: "Đà Nẵng",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "hai-chau",
      areaName: "Hải Châu",
      address: "22 Bạch Đằng, Thạch Thang, Hải Châu, Đà Nẵng",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviewsCount: 88,
      priceRange: "Từ 380.000đ/tháng",
      badge: "Đà Nẵng",
      specialOffer: "Miễn phí 100% tuần đầu cho cư dân Đà Nẵng và hội viên thể thao Kli.",
      description: "Tọa lạc ngay cung đường Bạch Đằng ngắm cầu quay sông Hàn. Trung tâm fitness hàng đầu miền Trung với đầy đủ Gym, Les Mills Group X và Spinning.",
      facilities: ["View trọn sông Hàn", "Phòng đạp xe Spinning ảo 3D", "Phòng xông ướt & xông khô", "Tủ đồ điện tử"],
      phone: "0905.123.456",
      isFeatured: false
    },
    {
      id: "loc-12",
      name: "Đồng Nai Fitness & Yoga Center Biên Hòa",
      region: "bien-hoa",
      regionName: "Đồng Nai",
      sport: "gym",
      sportName: "Gym & Fitness",
      area: "bien-hoa-center",
      areaName: "TP. Biên Hòa",
      address: "48 Đường Võ Thị Sáu, Quyết Thắng, TP. Biên Hòa, Đồng Nai",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviewsCount: 71,
      priceRange: "Từ 350.000đ/tháng",
      badge: "Biên Hòa",
      specialOffer: "Tặng ngay bình nước thể thao Kli & hỗ trợ chuyển tiếp hội viên Cali.",
      description: "Phòng tập quy mô lớn nhất nhì Biên Hòa với trang thiết bị chuẩn quốc tế, không gian thoáng đãng và cộng đồng người tập văn minh, thân thiện.",
      facilities: ["Bãi giữ xe rộng lớn", "Dàn máy nhập khẩu", "HLV chứng chỉ quốc tế", "Phòng tắm & xông hơi"],
      phone: "0938.777.888",
      isFeatured: false
    }
  ],

  communityBenefits: [
    {
      icon: "🔄",
      title: "Chuyển Đổi Quyền Lợi Linh Hoạt",
      desc: "Hỗ trợ kết nối chuyển đổi ngang hoặc nhận ưu đãi lên đến 80% từ các phòng tập đối tác cho hội viên gặp khó khăn khi Cali tạm ngưng."
    },
    {
      icon: "⭐",
      title: "Thông Tin Thực Tế & Minh Bạch",
      desc: "Mọi thông tin về giá cả, cơ sở vật chất và hợp đồng đều được đội ngũ Kli thẩm định trực tiếp trước khi chia sẻ tới cộng đồng."
    },
    {
      icon: "🤝",
      title: "Gặp Lại HLV Quen Thuộc",
      desc: "Cập nhật danh sách studio, lớp học do các HLV Group X, Yoga từng giảng dạy tại Cali đứng lớp để bạn giữ nguyên nhịp độ tập luyện."
    },
    {
      icon: "🎾",
      title: "Kết Nối Bạn Tập & Giao Lưu",
      desc: "Tham gia các nhóm giao lưu Pickleball, chạy bộ, cầu lông theo từng khu vực tại Hà Nội, TP.HCM, Đà Nẵng hàng tuần."
    }
  ],

  testimonials: [
    {
      name: "Minh Trang",
      role: "Hội viên Cali 5 năm (Hà Nội)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      content: "Khi trung tâm Cali gần nhà ngưng hoạt động, mình hoang mang vì đã quen tập GroupX hàng tuần. Nhờ có Cộng đồng Thể thao Kli, mình đã tìm thấy lớp thầy Paul Kent và được hỗ trợ thủ tục rất nhiệt tình!"
    },
    {
      name: "Tuấn Hoàng",
      role: "Vận động viên phong trào Pickleball",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Nhóm Kli tổ chức ghép sân và giao lưu rất văn minh. Bộ môn Pickleball ở đây phát triển nhanh, các sân bãi đối tác đều có giá ưu đãi cho thành viên."
    },
    {
      name: "Hồng Nhung",
      role: "Hội viên Yoga & Pilates (TP.HCM)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      content: "Tra cứu phòng tập theo từng quận trên web rất mượt và trực quan. Mình chọn được studio 8Fit gần nhà ngay sau 10 phút tìm kiếm."
    }
  ],

  introContent: {
    badge: "Sứ Mệnh Của Chúng Tôi",
    title: "Duy Trì Thói Quen Tập Luyện Bền Vững",
    description: "Trước biến động của thị trường thể hình và sự gián đoạn dịch vụ tại một số chuỗi phòng tập lớn như California Fitness, Cộng đồng Thể thao Kli ra đời với mục tiêu bảo vệ quyền lợi người tập và giữ vững ngọn lửa thể thao.",
    points: [
      "Tổng hợp thông tin địa điểm phòng tập, studio, sân thể thao được xác minh thực tế.",
      "Cầu nối độc quyền giữa các đối tác thể hình uy tín và hội viên cần chuyển đổi.",
      "Không gian sinh hoạt trực tuyến và offline lành mạnh, minh bạch và gắn kết.",
      "Tư vấn pháp lý và giải pháp bảo vệ quyền lợi hội viên hoàn toàn miễn phí."
    ],
    buttonText: "Gia Nhập Nhóm Zalo Kli",
    buttonLink: "https://zalo.me/g/klisports"
  }
};
