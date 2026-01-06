# Skill Test – Next.js E-Commerce App

This project is a small e-commerce application built as part of a skill test.
The goal was to closely follow the given Figma design while demonstrating SSR, GSAP animations, token-based authentication, and clean API integration using Next.js App Router.

##  Live Demo

https://skill-zybo.vercel.app


### Animations – GSAP

GSAP was used for all required animations:

*   Product card hover animations
*   Smooth image lift, background text movement, and content reveal
*   All animations are handled via `gsap.timeline()` (no CSS-only animations)

### Authentication & State Handling

*   Used **cookie-based authentication** to properly support SSR
*   The `access_token` is stored in cookies so Server Components can read auth state
*   This avoids hydration issues and ensures the Navbar renders correctly on first load

### API Integration

*   Server Components use native `fetch` for protected data (orders, product details)
*   Client-side actions (login, OTP, interactions) use clean API calls
*   Authorization is handled via `Authorization: Bearer <token>`

##  How to Run the Project

1.  **Clone the repo**
    ```bash
    git clone <repository-url>
    cd skill_zybo
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Setup environment variables**

    Create a `.env.local` file:
    ```env
    NEXT_PUBLIC_API_BASE_URL=https://skilltestnextjs.evidam.zybotechlab.com
    ```

4.  **Run locally**
    ```bash
    npm run dev
    ```

5.  **Production build**
    ```bash
    npm run build
    npm start
    ```

##  Project Structure

```
src/
├── app/
│   ├── api/            # API routes (logout, helpers)
│   ├── login/          # Login flow
│   ├── orders/         # Protected Orders page (SSR)
│   ├── product-page/   # Product listing (SSR)
│   ├── verify_phone/   # OTP verification
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Entry page
├── components/
│   ├── auth/           # Auth-related UI
│   ├── icons/          # SVG icons
│   ├── layout/         # Header, Footer, AuthNav
│   └── product/        # Product cards (GSAP animations)
└── utils/              # API utilities
```

##  Features Implemented

-   **SSR Navbar & Footer** with auth-based rendering
-   **GSAP animations** for product cards
-   **Cookie-based JWT authentication**
-   **OTP login flow**
-   **Protected routes** (Orders, Success page)
-   **Order history listing**
