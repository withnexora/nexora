# NEXORA Environment Template / Mẫu biến môi trường

## Tiếng Việt

Khi clone repository, tạo file local bằng:

```bash
cp .env.example .env
```

`.env.example` là checklist duy nhất cho các biến cấu hình. Frontend chỉ nhận biến có tiền tố `VITE_`; Vite sẽ đưa các biến này vào bundle trình duyệt. Không đặt secret backend vào `VITE_*`.

### Supabase

```dotenv
VITE_SUPABASE_URL=https://qdsqacpdoxsznyywdrgd.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_mZruXNPAPb4caa5VyCvRTg_cnb_hbrS
SUPABASE_URL=https://qdsqacpdoxsznyywdrgd.supabase.co
SUPABASE_SERVICE_ROLE_KEY=replace-with-server-only-supabase-secret
```

Hai biến `VITE_*` là public browser configuration và phải đi cùng RLS. `SUPABASE_SERVICE_ROLE_KEY` chỉ đặt trên backend/Render/aaPanel; không commit và không đưa vào frontend.

### Runtime, thanh toán và email

```dotenv
NODE_ENV=development
PORT=3000
PUBLIC_SITE_URL=http://localhost:3000
PUBLIC_APP_URL=http://localhost:3000
JWT_SECRET=replace-with-a-long-random-cookie-secret

PAYOS_CLIENT_ID=
PAYOS_API_KEY=
PAYOS_CHECKSUM_KEY=
SEPAY_WEBHOOK_SECRET=
CASSO_WEBHOOK_SECURE_TOKEN=
VIETQR_PARTNER_USERNAME=
VIETQR_PARTNER_PASSWORD=

RESEND_API_KEY=
EMAIL_FROM_ADDRESS=no-reply@example.com
SMTP_HOST=
SMTP_PORT=587
SMTP_USERNAME=
SMTP_PASSWORD=
```

### Tích hợp tùy chọn

```dotenv
VITE_APP_ID=
VITE_OAUTH_PORTAL_URL=
OAUTH_SERVER_URL=
OWNER_OPEN_ID=
OWNER_NAME=
BUILT_IN_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
VITE_FRONTEND_FORGE_API_KEY=
DATABASE_URL=
```

Trên Render, nhập các giá trị tương ứng tại **Service → Environment**. Sau khi đổi bất kỳ biến `VITE_*`, phải deploy lại để Vite build bundle mới. Giá nhận tiền, logo, banner, chiến dịch sale và email template được chỉnh trong Admin/Supabase, không sửa source code.

## English

After cloning the repository, create the local environment file:

```bash
cp .env.example .env
```

`.env.example` is the single checklist for clone-time configuration. Only `VITE_*` variables are sent to the browser bundle. Never put backend secrets in a `VITE_*` variable.

### Supabase

```dotenv
VITE_SUPABASE_URL=https://qdsqacpdoxsznyywdrgd.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_mZruXNPAPb4caa5VyCvRTg_cnb_hbrS
SUPABASE_URL=https://qdsqacpdoxsznyywdrgd.supabase.co
SUPABASE_SERVICE_ROLE_KEY=replace-with-server-only-supabase-secret
```

The two `VITE_*` values are public browser configuration and must be protected by RLS. Keep `SUPABASE_SERVICE_ROLE_KEY` on the backend/Render/aaPanel only; never commit it or send it to the frontend.

### Runtime, payments and email

```dotenv
NODE_ENV=production
PORT=10000
PUBLIC_SITE_URL=https://your-service.onrender.com
PUBLIC_APP_URL=https://your-service.onrender.com
JWT_SECRET=generate-a-long-random-server-secret

PAYOS_CLIENT_ID=
PAYOS_API_KEY=
PAYOS_CHECKSUM_KEY=
SEPAY_WEBHOOK_SECRET=
CASSO_WEBHOOK_SECURE_TOKEN=
VIETQR_PARTNER_USERNAME=
VIETQR_PARTNER_PASSWORD=

RESEND_API_KEY=
EMAIL_FROM_ADDRESS=no-reply@example.com
SMTP_HOST=
SMTP_PORT=587
SMTP_USERNAME=
SMTP_PASSWORD=
```

### Optional integrations

```dotenv
VITE_APP_ID=
VITE_OAUTH_PORTAL_URL=
OAUTH_SERVER_URL=
OWNER_OPEN_ID=
OWNER_NAME=
BUILT_IN_FORGE_API_URL=
BUILT_IN_FORGE_API_KEY=
VITE_FRONTEND_FORGE_API_URL=
VITE_FRONTEND_FORGE_API_KEY=
DATABASE_URL=
```

On Render, enter the corresponding values under **Service → Environment**. After changing any `VITE_*` value, redeploy so Vite creates a new public bundle. Payment receiving details, logo, banners, sale campaigns, and email templates are managed from Admin/Supabase rather than source code.
