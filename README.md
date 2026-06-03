# SGL Audit - Next.js Project

A production-ready Next.js project for SGL Audit, featuring bilingual support (FR/EN), system theming (Light/Dark mode), and a static blog section.

## Features

- **Next.js 15+ (App Router)**: High-performance architecture.
- **Tailwind CSS**: Modern styling with custom branding.
- **Bilingual (FR/EN)**: Middleware-based routing with French as the default.
- **Theming**: Light/Dark mode respecting OS preferences.
- **Static Blog**: Hardcoded blog system for easy content management without a database.
- **Responsive Design**: Fully optimized for mobile and desktop.
- **Contact Forms**: Integrated lead generation routing to `directeur@sglaudit.com`.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/app/[lang]`: Localized routes.
- `src/dictionaries`: Translation files (JSON).
- `src/components`: Reusable UI components.
- `src/config/blogs.ts`: Blog content configuration.
- `src/lib`: Helper functions and utilities.

## License

MIT License.
