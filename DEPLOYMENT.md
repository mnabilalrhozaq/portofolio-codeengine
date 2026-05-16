# Deployment Guide - CodeEngine Portfolio

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] TypeScript compilation passes without errors
- [x] All components are properly typed
- [x] ESLint rules are followed
- [x] Code is properly formatted

### ✅ Performance
- [x] Images are optimized using Next.js Image component
- [x] Lazy loading implemented for below-the-fold content
- [x] Three.js scene uses optimized low-poly geometry
- [x] Three.js scene pauses when not visible
- [x] GPU-accelerated CSS animations
- [x] Code splitting and tree shaking configured

### ✅ Accessibility
- [x] Semantic HTML5 elements used throughout
- [x] ARIA labels for interactive elements
- [x] Keyboard navigation support
- [x] Focus indicators for all interactive elements
- [x] Color contrast ratios meet WCAG AA standards
- [x] Alt text for all images
- [x] Form fields have associated labels
- [x] Respects prefers-reduced-motion preference

### ✅ SEO
- [x] Meta tags configured (title, description)
- [x] Open Graph tags for social media
- [x] Twitter Card tags
- [x] Robots.txt configured
- [x] Sitemap.xml configured
- [x] JSON-LD structured data for Organization
- [x] Canonical URLs

### ✅ Responsive Design
- [x] Mobile-first approach
- [x] Breakpoints at 768px (tablet) and 1024px (desktop)
- [x] Touch targets at least 44x44 pixels
- [x] Responsive typography
- [x] Tested on mobile and desktop viewports

## Environment Variables

Before deploying, ensure these environment variables are set:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional (for future backend integration)
NEXT_PUBLIC_API_URL=https://api.your-domain.com
CONTACT_FORM_WEBHOOK=https://hooks.your-domain.com/contact
```

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - Add `NEXT_PUBLIC_SITE_URL` in Vercel dashboard
   - Add any other required environment variables

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy**
   - Connect your repository to Netlify
   - Configure build settings
   - Add environment variables
   - Deploy

### Option 3: Self-Hosted

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm run start
   ```

3. **Use Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "codeengine-portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Reverse Proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment

### 1. Verify Deployment
- [ ] Visit the deployed URL
- [ ] Test all sections load correctly
- [ ] Test navigation links work
- [ ] Test contact form submission
- [ ] Test on mobile devices
- [ ] Test on different browsers

### 2. Performance Testing
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Core Web Vitals:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- [ ] Test page load speed
- [ ] Test Three.js performance

### 3. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test Open Graph tags with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Analytics Setup (Optional)
- [ ] Add Google Analytics
- [ ] Add Google Tag Manager
- [ ] Configure conversion tracking
- [ ] Set up custom events

### 5. Monitoring (Optional)
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Configure uptime monitoring
- [ ] Set up performance monitoring
- [ ] Configure alerts

## Troubleshooting

### Build Fails
- Check Node.js version (18.17+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npx tsc --noEmit`
- Check for missing dependencies

### Images Not Loading
- Verify image paths are correct
- Check Next.js Image configuration
- Ensure images are in `public/` folder

### Three.js Performance Issues
- Reduce particle count in `ThreeBackground.tsx`
- Disable Three.js on mobile devices
- Use lower quality geometry

### Contact Form Not Working
- Verify API route is accessible
- Check environment variables
- Implement backend integration
- Add error logging

## Rollback Plan

If deployment fails:

1. **Vercel/Netlify**: Use the dashboard to rollback to previous deployment
2. **Self-hosted**: 
   ```bash
   git revert HEAD
   npm run build
   pm2 restart codeengine-portfolio
   ```

## Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update Next.js when new versions release
- Monitor performance metrics

### Content Updates
- Update mock data in `data/` folder
- Update images in `public/` folder
- Update metadata in `lib/constants.ts`
- Rebuild and redeploy

## Support

For deployment issues:
- Check Next.js documentation: https://nextjs.org/docs
- Check Vercel documentation: https://vercel.com/docs
- Contact: hello@codeengine.com

---

Last updated: May 15, 2026
