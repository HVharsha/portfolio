# Architect Portfolio - Modern Animated Website

A production-ready, highly animated architect portfolio website built with Next.js, featuring smooth animations, 3D backgrounds, and professional design.

## 🚀 Features

### Design & Animation
- **Smooth Animations**: Framer Motion powered micro-interactions and page transitions
- **3D Hero Background**: React Three Fiber with animated particles and geometry
- **Custom Animated Cursor**: Interactive cursor with trailing effects (desktop only)
- **Scroll-triggered Animations**: IntersectionObserver-based reveal animations
- **Responsive Design**: Mobile-first approach with thoughtful breakpoints

### Architecture & Performance  
- **Next.js 13+**: App Router, Static Site Generation, and optimized performance
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Optimized Images**: Next.js Image component with proper sizing
- **Accessibility**: WCAG compliant with keyboard navigation and ARIA labels

### Core Functionality
- **Project Portfolio**: Dynamic project pages with filtering and galleries
- **Contact Form**: Full-featured form with email delivery and validation
- **Services Pages**: Interactive service cards with detailed information
- **About Page**: Professional bio with skills, timeline, and awards
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel/Netlify

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd architect-portfolio
npm install
```

2. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ARCHITECT_EMAIL=hello@architect.com
```

3. **Run the development server:**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Email Setup

For the contact form to work, you need to configure email settings:

#### Gmail Setup (Recommended for development)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: Google Account > Security > App Passwords
3. Use your Gmail address as `EMAIL_USER` and the app password as `EMAIL_PASSWORD`

#### Production Email (SendGrid/Mailgun)
For production, consider using a service like SendGrid:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page  
│   ├── projects/          # Projects pages
│   ├── services/          # Services page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── AnimatedButton.tsx
│   ├── AnimatedCursor.tsx
│   ├── ContactForm.tsx
│   ├── HeroBackground.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   └── Footer.tsx
├── data/                  # Static data files
│   ├── projects.json
│   ├── services.json
│   └── skills.json
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── lib/                   # Utilities
```

## 🎨 Customization

### Content Updates

1. **Projects**: Edit `/data/projects.json`
2. **Services**: Edit `/data/services.json`  
3. **Skills**: Edit `/data/skills.json`
4. **Personal Info**: Update contact details in components and data files

### Design Customization

1. **Colors**: Modify the color palette in `tailwind.config.ts`
2. **Fonts**: Change fonts in `app/layout.tsx`
3. **Animations**: Adjust animation settings in component files
4. **3D Background**: Customize particles and geometry in `components/HeroBackground.tsx`

### Adding New Projects

1. Add project data to `/data/projects.json`
2. Add project images to a CDN or `/public/images`
3. The project detail pages are automatically generated

## 📱 Performance & Accessibility

### Performance Features
- Image optimization with Next.js Image
- Lazy loading for non-critical content
- Code splitting and dynamic imports
- Reduced motion support
- Optimized bundle size

### Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The site is optimized for static export and can be deployed to:
- Netlify
- GitHub Pages  
- AWS S3
- Any static hosting provider

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Performance Monitoring
- Lighthouse scores consistently above 90
- Core Web Vitals optimized
- Bundle analyzer available for optimization

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support:
- Email: hello@architect.com
- Create an issue on GitHub
- Check the documentation

---

Built with ❤️ using modern web technologies for optimal performance and user experience.