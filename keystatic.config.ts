import { config, collection, singleton, fields, component } from '@keystatic/core';

// ==========================================================================
// CỘNG ĐỒNG THỂ THAO KLI - KEYSTATIC CMS CONFIGURATION
// Quản lý toàn bộ cấu trúc dữ liệu Bài Viết, Phòng Tập và Cài Đặt Chung
// Dành cho: PO/PM & Ban Biên Tập Nội Dung Kli Sports
// ==========================================================================

export default config({
  // Chế độ lưu trữ: Local khi phát triển, Tự động commit vào GitHub khi deploy lên Vercel
  storage: process.env.NODE_ENV === 'production'
    ? {
        kind: 'github',
        repo: {
          owner: process.env.PUBLIC_VERCEL_GIT_REPO_OWNER || 'your-github-username',
          name: process.env.PUBLIC_VERCEL_GIT_REPO_SLUG || 'congdongthethaokli',
        },
      }
    : {
        kind: 'local',
      },

  ui: {
    brand: {
      name: '⚡ KLI SPORTS CMS',
    },
    navigation: {
      'Nội Dung Bài Viết': ['posts'],
      'Danh Bạ Địa Điểm': ['locations'],
      'Cấu Hình Chung': ['brandSettings'],
    },
  },

  collections: {
    // ========================================================================
    // 1. QUẢN LÝ BÀI VIẾT & TIN TỨC (POSTS)
    // ========================================================================
    posts: collection({
      label: 'Bài Viết & Tin Tức',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Tiêu đề bài viết',
            description: 'Tiêu đề hiển thị chính của bài viết',
          },
        }),

        summary: fields.text({
          label: 'Tóm tắt bài viết (Excerpt / Meta Description)',
          description: 'Đoạn văn ngắn tóm tắt bài viết hiển thị ở danh sách và chia sẻ mạng xã hội',
          multiline: true,
        }),

        publishedDate: fields.date({
          label: 'Ngày xuất bản',
          defaultValue: { kind: 'today' },
        }),

        author: fields.text({
          label: 'Tác giả / Ban Biên Tập',
          defaultValue: 'Ban Quản Trị Kli Sports',
        }),

        status: fields.select({
          label: 'Trạng thái bài viết',
          options: [
            { label: '🟢 Xuất bản ngay (Published)', value: 'published' },
            { label: '🟡 Bản nháp (Draft)', value: 'draft' },
          ],
          defaultValue: 'published',
        }),

        category: fields.select({
          label: 'Chuyên mục bài viết',
          options: [
            { label: '🏋️ Gym & Thể Hình', value: 'gym' },
            { label: '💃 Group X & Dance', value: 'group-x' },
            { label: '🧘 Yoga & Pilates Trị Liệu', value: 'yoga' },
            { label: '🏸 Pickleball & Cầu Lông', value: 'indoor' },
            { label: '🏊 Bơi Lội & Thể Thao Dưới Nước', value: 'swimming' },
            { label: '🥗 Dinh Dưỡng & Sức Khỏe', value: 'nutrition' },
            { label: '📢 Tin Tức & Sự Kiện Kli', value: 'community' },
          ],
          defaultValue: 'gym',
        }),

        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Danh sách Thẻ (Tags)',
          itemLabel: (props) => props.value || 'Thẻ mới',
        }),

        coverImage: fields.image({
          label: 'Ảnh đại diện / Ảnh bìa (Featured Image)',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
          description: 'Ảnh ngang tỉ lệ 16:9 chất lượng cao',
        }),

        isFeatured: fields.checkbox({
          label: '⭐ Ghim bài viết này lên vị trí nổi bật trang chủ',
          defaultValue: false,
        }),

        featuredPosition: fields.select({
          label: 'Vị trí ưu tiên trên trang chủ (Nếu được ghim)',
          options: [
            { label: 'Vị trí 1 (Banner lớn nhất)', value: '1' },
            { label: 'Vị trí 2 (Bài phụ bên phải)', value: '2' },
            { label: 'Vị trí 3 (Bài phụ bên dưới)', value: '3' },
          ],
          defaultValue: '1',
        }),

        // --------------------------------------------------------------------
        // TRƯỜNG ĐÁNH GIÁ XẾP HẠNG PHÒNG TẬP (YÊU CẦU ĐẶC BIỆT CỦA PO/PM)
        // --------------------------------------------------------------------
        venueReview: fields.object(
          {
            isReviewPost: fields.checkbox({
              label: '✅ Đây là bài viết Đánh giá / Review xếp hạng phòng tập, studio hoặc sân bãi',
              defaultValue: false,
            }),
            venueName: fields.text({
              label: 'Tên địa điểm được đánh giá',
              description: 'Ví dụ: Nova Fitness Lê Văn Lương, Group X Paul Kent...',
            }),
            overallRating: fields.select({
              label: 'Điểm xếp hạng tổng quan (Số sao)',
              options: [
                { label: '⭐⭐⭐⭐⭐ 5.0 (Xuất sắc - Khuyên Dùng Hàng Đầu)', value: '5.0' },
                { label: '⭐⭐⭐⭐½ 4.5 (Rất Tốt - Đáng Trải Nghiệm)', value: '4.5' },
                { label: '⭐⭐⭐⭐ 4.0 (Tốt - Đạt Chuẩn)', value: '4.0' },
                { label: '⭐⭐⭐½ 3.5 (Khá - Cần Cải Thiện Thêm)', value: '3.5' },
                { label: '⭐⭐⭐ 3.0 (Trung Bình)', value: '3.0' },
              ],
              defaultValue: '5.0',
            }),
            rankBadge: fields.text({
              label: 'Danh hiệu xếp hạng',
              defaultValue: 'Phòng Tập Hạng A - Khuyên Dùng',
              description: 'Ví dụ: Top 1 Khu Vực, Hạng A Đặc Quyền Cali, Sân Chuẩn Thi Đấu...',
            }),
            facilityScore: fields.text({
              label: 'Điểm Cơ sở vật chất & Máy móc (Thang điểm 10)',
              defaultValue: '9.5/10',
            }),
            coachScore: fields.text({
              label: 'Điểm Đội ngũ HLV & Chuyên môn (Thang điểm 10)',
              defaultValue: '9.0/10',
            }),
            priceScore: fields.text({
              label: 'Điểm Mức giá & Quyền lợi chuyển đổi Cali (Thang điểm 10)',
              defaultValue: '9.8/10',
            }),
            cleanlinessScore: fields.text({
              label: 'Điểm Vệ sinh & Tiện ích đi kèm (Thang điểm 10)',
              defaultValue: '9.2/10',
            }),
            pros: fields.text({
              label: 'Ưu điểm nổi bật (Mỗi ý xuống 1 dòng)',
              multiline: true,
              description: 'Ví dụ: Không gian rộng, dàn máy mới, phòng tắm sạch, hỗ trợ Cali nhiệt tình...',
            }),
            cons: fields.text({
              label: 'Điểm cần lưu ý / Nhược điểm',
              multiline: true,
              description: 'Ví dụ: Giờ cao điểm đông người, cần đặt lịch trước...',
            }),
            verdict: fields.text({
              label: 'Lời khuyên / Kết luận của Ban Quản Trị Kli Sports',
              multiline: true,
            }),
          },
          {
            label: '📊 Hộp Đánh Giá & Xếp Hạng Phòng Tập / Sân Bãi',
            description: 'Phần này sẽ hiển thị thành bảng điểm đánh giá trực quan ở đầu hoặc cuối bài viết',
          }
        ),

        // --------------------------------------------------------------------
        // NỘI DUNG CHÍNH (BLOCK EDITOR - NOTION STYLE)
        // --------------------------------------------------------------------
        content: fields.document({
          label: 'Nội dung chi tiết bài viết (Block Editor)',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
          componentBlocks: {
            // Khối Thông Báo / Lưu Ý (Callout Box)
            callout: component({
              label: 'Hộp Lưu Ý / Thông Báo (Callout Box)',
              schema: {
                title: fields.text({ label: 'Tiêu đề lưu ý', defaultValue: 'LƯU Ý QUAN TRỌNG CHO HỘI VIÊN' }),
                tone: fields.select({
                  label: 'Loại thông báo',
                  options: [
                    { label: '🔴 Khẩn cấp / Cảnh báo (Đỏ)', value: 'danger' },
                    { label: '🟢 Ưu đãi / Quyền lợi (Xanh lá)', value: 'success' },
                    { label: '🔵 Thông tin chung (Xanh dương)', value: 'info' },
                    { label: '🟡 Chú ý đặc biệt (Vàng cam)', value: 'warning' },
                  ],
                  defaultValue: 'success',
                }),
                message: fields.text({ label: 'Nội dung thông báo', multiline: true }),
              },
              preview: (props) => `[${props.fields.tone.value?.toUpperCase()}] ${props.fields.title.value}: ${props.fields.message.value}`,
            }),

            // Khối Nút Kêu Gọi Hành Động (CTA Button)
            ctaButton: component({
              label: 'Nút Kêu Gọi Hành Động (CTA Button)',
              schema: {
                text: fields.text({ label: 'Chữ trên nút bấm', defaultValue: 'Đăng Ký Nhận Ưu Đãi Hội Viên Kli' }),
                url: fields.text({ label: 'Đường dẫn liên kết (URL)', defaultValue: 'https://zalo.me/g/klisports' }),
                style: fields.select({
                  label: 'Kiểu dáng nút',
                  options: [
                    { label: 'Nổi bật Thể Thao (Đỏ Neon Kli)', value: 'primary' },
                    { label: 'Nhóm Zalo (Xanh Zalo)', value: 'zalo' },
                    { label: 'Gọi Hotline (Xanh Lá)', value: 'call' },
                  ],
                  defaultValue: 'primary',
                }),
              },
              preview: (props) => `[NÚT BẤM] ${props.fields.text.value} -> ${props.fields.url.value}`,
            }),
          },
        }),
      },
    }),

    // ========================================================================
    // 2. QUẢN LÝ PHÒNG TẬP & SÂN BÃI (LOCATIONS)
    // ========================================================================
    locations: collection({
      label: 'Phòng Tập & Sân Bãi',
      slugField: 'name',
      path: 'src/content/locations/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({
          name: { label: 'Tên cơ sở / Sân bãi' },
        }),
        region: fields.select({
          label: 'Tỉnh / Thành phố',
          options: [
            { label: 'Hà Nội', value: 'ha-noi' },
            { label: 'TP. Hồ Chí Minh', value: 'hcm' },
            { label: 'Đà Nẵng', value: 'da-nang' },
            { label: 'Đồng Nai (Biên Hòa)', value: 'bien-hoa' },
          ],
          defaultValue: 'ha-noi',
        }),
        areaName: fields.text({
          label: 'Khu vực / Quận (Ví dụ: Lê Văn Lương, Cầu Giấy, Quận 7)',
        }),
        sport: fields.select({
          label: 'Bộ môn chính',
          options: [
            { label: '🏋️ Gym & Fitness', value: 'gym' },
            { label: '💃 Group X & Dance', value: 'group-x' },
            { label: '🧘 Yoga & Pilates', value: 'yoga' },
            { label: '🏸 Pickleball & Cầu Lông', value: 'indoor' },
            { label: '🏊 Bơi Lội', value: 'swimming' },
            { label: '🎾 Tennis & Ngoài Trời', value: 'outdoor' },
          ],
          defaultValue: 'gym',
        }),
        address: fields.text({ label: 'Địa chỉ cụ thể' }),
        phone: fields.text({ label: 'Số hotline liên hệ' }),
        priceRange: fields.text({
          label: 'Khoảng giá tham khảo',
          defaultValue: 'Từ 450.000đ/tháng',
        }),
        rating: fields.text({ label: 'Điểm đánh giá (Ví dụ: 4.9)', defaultValue: '4.9' }),
        reviewsCount: fields.integer({ label: 'Số lượt đánh giá', defaultValue: 120 }),
        badge: fields.text({
          label: 'Huy hiệu nổi bật (Ví dụ: Hỗ trợ Cali, HLV Cali Gốc, Tập Thử Miễn Phí)',
          defaultValue: 'Hỗ trợ Cali',
        }),
        specialOffer: fields.text({
          label: 'Chính sách ưu đãi độc quyền hội viên Kli',
          multiline: true,
        }),
        description: fields.text({
          label: 'Mô tả chi tiết phòng tập',
          multiline: true,
        }),
        facilities: fields.array(fields.text({ label: 'Tiện ích' }), {
          label: 'Tiện ích đi kèm (InBody, Xông hơi, Tắm nóng lạnh, Bãi đỗ xe...)',
          itemLabel: (props) => props.value || 'Tiện ích mới',
        }),
        image: fields.image({
          label: 'Ảnh đại diện phòng tập',
          directory: 'public/images/locations',
          publicPath: '/images/locations/',
        }),
        isFeatured: fields.checkbox({
          label: 'Hiển thị trong danh sách đề xuất hàng đầu',
          defaultValue: true,
        }),
      },
    }),
  },

  singletons: {
    // ========================================================================
    // 3. CẤU HÌNH THƯƠNG HIỆU CHUNG (BRAND SETTINGS)
    // ========================================================================
    brandSettings: singleton({
      label: 'Cấu Hình Chung Thương Hiệu',
      path: 'src/content/settings/brand',
      format: { data: 'json' },
      schema: {
        brandName: fields.text({ label: 'Tên cộng đồng', defaultValue: 'Cộng Đồng Thể Thao KLI' }),
        tagline: fields.text({ label: 'Khẩu hiệu (Tagline)', defaultValue: 'Kết nối đam mê - Vững vàng nhịp tập' }),
        subTagline: fields.text({
          label: 'Mô tả ngắn trang chủ',
          defaultValue: 'Nền tảng hỗ trợ hội viên tìm kiếm phòng tập, sân bãi thể thao và huấn luyện viên uy tín trên toàn quốc.',
          multiline: true,
        }),
        hotline: fields.text({ label: 'Hotline hỗ trợ', defaultValue: '0988.123.456' }),
        zaloGroup: fields.text({ label: 'Đường link nhóm Zalo', defaultValue: 'https://zalo.me/g/klisports' }),
        fbGroup: fields.text({ label: 'Đường link nhóm Facebook', defaultValue: 'https://facebook.com/groups/congdongthethaokli' }),
        statsHoiVien: fields.text({ label: 'Số lượng Hội viên', defaultValue: '15,000+' }),
        statsDiaDiem: fields.text({ label: 'Số lượng Phòng tập đối tác', defaultValue: '180+' }),
        statsHLV: fields.text({ label: 'Số lượng HLV đối tác', defaultValue: '95+' }),
        statsHoTro: fields.text({ label: 'Tỉ lệ Hỗ trợ chuyển đổi Cali', defaultValue: '100%' }),
      },
    }),
  },
});
