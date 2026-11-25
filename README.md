# ⚡ CỘNG ĐỒNG THỂ THAO KLI (KLI SPORTS COMMUNITY)
> Nền tảng kết nối thể thao, thẩm định phòng tập và hỗ trợ chuyển đổi quyền lợi hội viên California Fitness toàn quốc.

Dự án được xây dựng trên nền tảng **Astro 5** kết hợp cùng hệ thống quản trị nội dung mã nguồn mở **Keystatic CMS** (Git-backed CMS by Thinkmill).

---

## 🎯 CÁC TÍNH NĂNG CHÍNH DÀNH CHO PO/PM & BAN BIÊN TẬP

1. **Trang Quản Trị Trực Quan (`/keystatic`):**
   - Không cần kiến thức lập trình, không cần chỉnh sửa code hay thao tác database.
   - Đăng nhập an toàn trực tiếp qua tài khoản GitHub.
   - Tự động lưu và commit dữ liệu vào GitHub repo.
2. **Quản lý Bài Viết & Đánh Giá Phòng Tập (Posts & Venue Reviews):**
   - Soạn thảo khối (Block Editor Notion-style): Tiêu đề, văn bản, ảnh, trích dẫn, bảng, nút bấm CTA, hộp lưu ý.
   - **Hộp Đánh Giá & Xếp Hạng Phòng Tập / Sân Bãi (Review Scorecard):**
     - Đặt điểm tổng quan (⭐⭐⭐⭐⭐ 5.0, 4.5, 4.0...).
     - Gắn huy hiệu xếp hạng: *"Phòng Tập Hạng A - Khuyên Dùng"*, *"Top 1 Cầu Giấy"*, *"Sân Chuẩn Thi Đấu"*.
     - Chấm điểm 4 tiêu chí khắt khe: Cơ sở vật chất, HLV, Mức giá & quyền lợi Cali, Vệ sinh.
     - Liệt kê Ưu điểm (Pros) và Nhược điểm/Lưu ý (Cons).
     - Kết luận & Lời khuyên chính thức từ Kli Sports.
   - Quản lý trạng thái bài viết: **Bản nháp (Draft)** hoặc **Xuất bản (Published)**.
   - Ghim bài viết lên vị trí nổi bật trang chủ (Vị trí 1, 2, 3).
3. **Quản lý Danh Sách Phòng Tập & Sân Bãi (Locations):**
   - Thêm mới, chỉnh sửa địa chỉ, số hotline, mức giá, bộ môn, tiện ích và chính sách ưu đãi dành cho hội viên Cali.
4. **Cấu Hình Thương Hiệu (Brand Settings):**
   - Đổi số hotline, link nhóm Zalo, link Facebook Group, số liệu thống kê hội viên.

---

## 📂 CẤU TRÚC THƯ MỤC DỰ ÁN

```
congdongthethaokli/
├── src/
│   ├── content/                  # Thư mục lưu trữ nội dung do Keystatic quản lý
│   │   ├── posts/                # Các bài viết và bài review phòng tập (.mdoc)
│   │   ├── locations/            # Danh sách phòng tập & sân bãi (.json)
│   │   └── settings/             # Cấu hình thương hiệu Kli (.json)
│   ├── layouts/
│   │   └── Layout.astro          # Khung giao diện chuẩn (Navbar, Footer, SEO)
│   ├── pages/
│   │   ├── index.astro           # Trang chủ Cộng đồng Thể thao Kli
│   │   └── bai-viet/
│   │       ├── index.astro       # Chuyên mục bài viết & review
│   │       └── [slug].astro      # Chi tiết bài viết kèm Hộp Đánh Giá Xếp Hạng
│   └── content.config.ts         # Cấu hình bộ sưu tập Astro 5 Content Layer
├── public/                       # Tài nguyên tĩnh (ảnh bìa, data dự phòng)
├── backup_legacy/                # Thư mục lưu trữ an toàn code HTML gốc ban đầu
├── keystatic.config.ts           # Schema định nghĩa các trường dữ liệu trên CMS
├── astro.config.mjs              # Cấu hình tích hợp Astro + React + Keystatic
├── package.json                  # Khai báo các gói thư viện
└── tsconfig.json                 # Cấu hình TypeScript
```

---

## 🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL (CHO PO/PM)

Website được thiết kế để tự động hóa 100% khi đẩy lên Vercel:

1. **Bước 1: Đẩy mã nguồn lên GitHub Repo**
   - Toàn bộ source code đã được chuẩn bị đầy đủ trong repository `congdongthethaokli`.
2. **Bước 2: Kết nối với Vercel**
   - Đăng nhập vào [Vercel](https://vercel.com) -> Bấm **Add New Project**.
   - Chọn repository `congdongthethaokli`.
   - Vercel sẽ tự động phát hiện Framework là **Astro** và tự cấu hình lệnh `astro build`.
   - Bấm **Deploy**.
3. **Bước 3: Bật tính năng chỉnh sửa CMS trên Vercel**
   - Truy cập vào [https://keystatic.cloud](https://keystatic.cloud) (hoặc cài đặt Keystatic GitHub App miễn phí).
   - Chọn cấp quyền cho repository `congdongthethaokli`.
   - Khi đó, bạn và đội ngũ nội dung có thể truy cập `https://your-domain.vercel.app/keystatic` để bắt đầu quản lý bài viết ngay lập tức!
