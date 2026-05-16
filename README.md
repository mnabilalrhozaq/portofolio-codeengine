# CodeEngine Portfolio Website

A modern, premium portfolio website built with Next.js 14+, TypeScript, Three.js, Tailwind CSS, and Framer Motion. Features smooth scrolling, elegant animations, and a clean, professional design optimized for performance and accessibility.

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 14+ App Router, TypeScript, and React 18+
- **3D Graphics**: Interactive Three.js background with floating geometric shapes
- **Smooth Animations**: Framer Motion for UI animations and Lenis for smooth scrolling
- **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- **Premium UI/UX**: Clean, elegant design with sky blue color scheme and snow white backgrounds
- **Performance Optimized**: Lighthouse score 90+, optimized Core Web Vitals
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **SEO Ready**: Comprehensive metadata, Open Graph tags, and structured data

## 🎨 Design Highlights

- **Hero Section**: Full-viewport Three.js animated background with floating particles
- **Services Section**: Grid layout showcasing 6 core services with hover effects
- **Parallax Banner**: Eye-catching divider with parallax scrolling effect
- **Portfolio Section**: Filterable project gallery with smooth transitions
- **Horizontal Scroll**: Unique horizontal scrolling section with 3 panels (Intro, Process, Pricing)
- **Testimonials**: Client testimonials with star ratings and avatars
- **Contact Form**: Validated form with React Hook Form and Zod
- **Custom Cursor**: Interactive cursor that responds to hover states

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codeengine-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

Run the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 📁 Project Structure

```
codeengine-portfolio/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form submission endpoint
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles and Tailwind config
│   ├── error.tsx             # Error boundary
│   ├── not-found.tsx         # 404 page
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Sitemap generator
├── components/               # React components
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ParallaxBanner.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── HorizontalScrollSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── three/                # Three.js components
│   │   └── ThreeBackground.tsx
│   ├── ui/                   # UI components
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── CustomCursor.tsx      # Custom cursor component
│   ├── LoadingAnimation.tsx  # Loading screen
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   └── SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
├── data/                     # Mock data
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   └── process.ts
├── hooks/                    # Custom React hooks
│   ├── useScroll.ts          # Scroll position tracking
│   ├── useInView.ts          # Intersection Observer wrapper
│   └── useMediaQuery.ts      # Responsive breakpoint detection
├── lib/                      # Utilities and helpers
│   ├── types.ts              # TypeScript type definitions
│   ├── schemas.ts            # Zod validation schemas
│   ├── utils.ts              # Utility functions
│   ├── constants.ts          # App constants
│   └── animations.ts         # Animation utilities
└── public/                   # Static assets
    ├── icons/                # Icon files
    └── images/               # Image files
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Form (for future backend integration)
# NEXT_PUBLIC_API_URL=https://api.example.com
# CONTACT_FORM_WEBHOOK=https://hooks.example.com/contact
```

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Other Platforms

You can also deploy to:
- **Netlify**: Use the Next.js plugin
- **AWS Amplify**: Configure build settings for Next.js
- **Docker**: Use the included Dockerfile (if available)
- **Self-hosted**: Build and run with `npm run build && npm run start`

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

**Note**: The custom cursor is hidden on mobile devices (viewport < 768px) for better touch experience.

## ♿ Accessibility

This website follows WCAG 2.1 Level AA guidelines:

- Semantic HTML5 elements throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators for all interactive elements
- Color contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Alt text for all images
- Form fields with associated labels
- Respects `prefers-reduced-motion` preference

## 🚀 Performance

Performance optimizations include:

- Next.js Image component for optimized images
- Lazy loading for below-the-fold content
- Code splitting for route-based chunks
- Tree shaking for unused code removal
- Preloaded critical fonts (DM Sans, Playfair Display)
- GPU-accelerated CSS animations
- Optimized Three.js scene with low-poly geometry
- Three.js scene pauses when not visible
- Lighthouse score: 90+
- Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)

## 🔌 API Integration

The contact form is ready for backend integration. The API route structure is in place at `app/api/contact/route.ts`.

To integrate with your backend:

1. Update the API endpoint in the contact form component
2. Configure CORS if needed
3. Add authentication if required
4. Update environment variables

## 📝 Known Issues & Limitations

- Contact form currently shows success message without actual submission (backend integration pending)
- Three.js background may have reduced performance on older mobile devices
- Custom cursor is disabled on touch devices

## 🤝 Contributing

This is a portfolio project. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📧 Contact

For questions or support, please contact:
- Email: hello@codeengine.com
- Website: https://codeengine.com

---

Built with ❤️ by CodeEngine
