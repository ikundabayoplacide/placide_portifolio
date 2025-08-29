# Deployment Guide - IKUNDABAYO Placide Portfolio Website

## Overview

This guide provides comprehensive instructions for deploying the portfolio website to various hosting platforms, with primary focus on Vercel deployment and custom domain configuration.

## Prerequisites

### System Requirements
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Latest version for version control
- **Modern Browser**: For testing and verification

### Account Requirements
- **GitHub Account**: For code repository hosting
- **Vercel Account**: For deployment (free tier available)
- **Domain Registrar Account**: For custom domain (optional)

## Deployment Options

### Option 1: Vercel Deployment (Recommended)

#### Step 1: Prepare Repository
\`\`\`bash
# Clone or download the project
git clone <repository-url>
cd placide-portfolio

# Install dependencies
npm install

# Test local build
npm run build
npm start
\`\`\`

#### Step 2: Deploy via Vercel Dashboard
1. **Login to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub account

2. **Import Project**
   - Click "New Project"
   - Import from GitHub repository
   - Select the portfolio repository

3. **Configure Project**
   - **Project Name**: `placide-portfolio` (or preferred name)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for build completion (2-3 minutes)
   - Receive deployment URL: `https://placide-portfolio.vercel.app`

#### Step 3: Configure Custom Domain
1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add `placideikundabayo.com`
   - Add `www.placideikundabayo.com`

2. **Configure DNS Records**
   \`\`\`
   # A Record
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600

   # CNAME Record
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   \`\`\`

3. **Verify Configuration**
   - Wait 24-48 hours for DNS propagation
   - SSL certificate automatically issued
   - Test both `placideikundabayo.com` and `www.placideikundabayo.com`

### Option 2: Vercel CLI Deployment

#### Step 1: Install Vercel CLI
\`\`\`bash
# Install globally
npm install -g vercel

# Login to Vercel
vercel login
\`\`\`

#### Step 2: Deploy Project
\`\`\`bash
# Navigate to project directory
cd placide-portfolio

# Deploy to Vercel
vercel

# Follow prompts:
# ? Set up and deploy "~/placide-portfolio"? [Y/n] y
# ? Which scope do you want to deploy to? [Your Account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? placide-portfolio
# ? In which directory is your code located? ./
\`\`\`

#### Step 3: Production Deployment
\`\`\`bash
# Deploy to production
vercel --prod

# Custom domain deployment
vercel --prod --name placide-portfolio
\`\`\`

### Option 3: Alternative Hosting Platforms

#### Netlify Deployment
1. **Build Configuration**
   \`\`\`toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   \`\`\`

2. **Deploy Steps**
   - Connect GitHub repository
   - Configure build settings
   - Deploy automatically on push

#### GitHub Pages (Static Export)
1. **Configure Next.js for Static Export**
   \`\`\`javascript
   // next.config.mjs
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   
   export default nextConfig;
   \`\`\`

2. **Build and Deploy**
   \`\`\`bash
   npm run build
   # Upload 'out' directory to GitHub Pages
   \`\`\`

## Environment Configuration

### Environment Variables
Currently, no environment variables are required for basic functionality. Future additions:

\`\`\`bash
# .env.local (for future features)
NEXT_PUBLIC_SITE_URL=https://placideikundabayo.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
CONTACT_EMAIL_SERVICE=your-email-service-key
\`\`\`

### Build Configuration
\`\`\`javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
\`\`\`

## Domain Setup Guide

### Purchasing Domain
1. **Choose Registrar**
   - **Recommended**: Namecheap, Google Domains, Porkbun
   - **Budget**: $10-15/year for .com domain

2. **Domain Selection**
   - Primary: `placideikundabayo.com`
   - Alternatives: `placide.dev`, `ikundabayo.tech`

3. **Purchase Process**
   - Search for domain availability
   - Complete purchase with registrar
   - Access DNS management panel

### DNS Configuration
\`\`\`bash
# DNS Records for Vercel
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Optional: Email forwarding
Type: MX
Name: @
Value: [Email service MX records]
\`\`\`

### SSL Certificate
- **Automatic**: Vercel provides free SSL via Let's Encrypt
- **Custom**: Upload custom certificate if needed
- **Verification**: Check HTTPS functionality after DNS propagation

## Performance Optimization

### Build Optimizations
\`\`\`bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Optimize images
# Images automatically optimized by Next.js Image component

# Enable compression
# Automatically enabled in production builds
\`\`\`

### CDN Configuration
- **Vercel Edge Network**: Automatic global CDN
- **Custom CDN**: Configure if using alternative hosting
- **Asset Optimization**: Automatic minification and compression

### Caching Strategy
\`\`\`javascript
// Automatic caching headers set by Next.js
// Static assets: 1 year cache
// API routes: No cache by default
// Pages: ISR or static generation
\`\`\`

## Monitoring and Analytics

### Performance Monitoring
1. **Vercel Analytics**
   - Enable in project settings
   - Monitor Core Web Vitals
   - Track page performance

2. **Google Analytics** (Future)
   \`\`\`javascript
   // Add to layout.tsx
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
       </html>
     )
   }
   \`\`\`

### Error Tracking
1. **Vercel Functions Logs**
   - Monitor API route errors
   - Track function performance

2. **Client-Side Monitoring**
   \`\`\`javascript
   // Add error boundary for React errors
   // Implement custom error tracking
   \`\`\`

## Backup and Recovery

### Code Backup
- **Primary**: GitHub repository
- **Secondary**: Local development environment
- **Automated**: Vercel maintains deployment history

### Content Backup
- **Static Assets**: Stored in repository
- **Generated Content**: Recreated on each build
- **Configuration**: Version controlled

### Recovery Procedures
1. **Rollback Deployment**
   \`\`\`bash
   # Via Vercel CLI
   vercel rollback [deployment-url]
   
   # Via Dashboard
   # Select previous deployment and promote
   \`\`\`

2. **Restore from Backup**
   \`\`\`bash
   # Restore from Git
   git checkout [previous-commit]
   vercel --prod
   \`\`\`

## Troubleshooting

### Common Issues

#### Build Failures
\`\`\`bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run build
\`\`\`

#### Domain Issues
\`\`\`bash
# Check DNS propagation
nslookup placideikundabayo.com
dig placideikundabayo.com

# Verify SSL certificate
openssl s_client -connect placideikundabayo.com:443
\`\`\`

#### Performance Issues
\`\`\`bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check image optimization
# Ensure using Next.js Image component

# Monitor Core Web Vitals
# Use Lighthouse or Vercel Analytics
\`\`\`

### Support Resources
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Community Support**: GitHub Issues, Discord, Stack Overflow

## Maintenance

### Regular Updates
\`\`\`bash
# Update dependencies monthly
npm update

# Security updates
npm audit
npm audit fix

# Next.js updates
npm install next@latest react@latest react-dom@latest
\`\`\`

### Performance Reviews
- **Monthly**: Check Core Web Vitals
- **Quarterly**: Bundle size analysis
- **Annually**: Full performance audit

### Content Updates
1. **Personal Information**: Update in `app/page.tsx`
2. **Projects**: Add new projects to projects array
3. **Experience**: Update experience section
4. **Skills**: Add new technologies to skills array

## Security Considerations

### Security Headers
\`\`\`javascript
// Implemented in next.config.mjs
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
\`\`\`

### Content Security Policy
\`\`\`javascript
// Future implementation
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
\`\`\`

## Cost Estimation

### Vercel Hosting
- **Hobby Plan**: Free
  - 100GB bandwidth
  - 1000 serverless function invocations
  - Automatic HTTPS

- **Pro Plan**: $20/month (if needed)
  - 1TB bandwidth
  - Unlimited serverless functions
  - Advanced analytics

### Domain Costs
- **.com Domain**: $10-15/year
- **DNS Management**: Usually included
- **Email Forwarding**: $0-5/month

### Total Estimated Cost
- **Minimum**: $10-15/year (domain only)
- **Recommended**: $10-15/year (Hobby plan sufficient)

## Conclusion

This deployment guide provides comprehensive instructions for successfully deploying the IKUNDABAYO Placide portfolio website. The recommended Vercel deployment offers the best balance of performance, ease of use, and cost-effectiveness.

For additional support or questions about deployment, refer to the technical documentation or contact the development team.

---

**Deployment Guide Version**: 1.0.0  
**Last Updated**: January 2025  
**Next Review**: April 2025
