# Jherilyn Fortes - Professional Portfolio

## 🚀 Live Demo
Visit the live portfolio: [https://barbiefortes04-jpg-portfolio.vercel.app](https://barbiefortes04-jpg-portfolio.vercel.app)

## 📋 Overview
A comprehensive professional portfolio showcasing modern web development skills, built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio integrates advanced technologies including Model Context Protocol (MCP), AI-powered chat functionality, and responsive design patterns.

## Features

- **Modern Design**: Clean and professional layout with dark/light mode toggle
- **Responsive**: Optimized for all screen sizes and devices  
- **Performance**: Built with Next.js 15 for optimal loading speeds
- **Accessibility**: Follows web accessibility standards
- **TypeScript**: Type-safe development
- **Component Library**: Uses Shadcn UI components for consistent design

## Sections

- **Hero**: Professional headshot, name, title, and brief introduction
- **About**: Detailed professional background and personal story
- **Skills**: Technical competencies organized by category
- **Experience**: Work history with detailed descriptions
- **Education**: Academic background and certifications
- **Projects**: Portfolio showcase with live demos and GitHub links
- **Contact**: Contact information and social media links

## AI Generation Approach

This website was designed to be easily generated and customized using AI tools like v0.dev:

1. **Structured Components**: Each section is a separate React component for modularity
2. **Type-Safe Data**: All content is structured as TypeScript interfaces
3. **Design System**: Consistent styling using Tailwind CSS and Shadcn UI
4. **Responsive Design**: Mobile-first approach with responsive breakpoints

## Tech Stack

- **Frontend**: React 18, Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following components with your information:

- `components/hero.tsx` - Name, title, bio, contact info
- `components/about.tsx` - Professional background
- `components/skills.tsx` - Technical and soft skills
- `components/experience.tsx` - Work history and descriptions
- `components/education.tsx` - Academic background and certifications
- `components/projects.tsx` - Portfolio projects with links
- `components/contact.tsx` - Contact information and social links

### Styling

- Modify `app/globals.css` for global styles
- Customize colors in `tailwind.config.js`
- Update component styles using Tailwind classes

### Images

- Replace the avatar image in `components/hero.tsx`
- Update project images in `components/projects.tsx`
- All images are currently using placeholder URLs from Unsplash

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy with zero configuration
3. Automatic deployments on git push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Cloudflare Pages
- AWS Amplify
- Railway

## Dark/Light Mode

The website includes a theme toggle that:
- Respects user's system preference by default
- Allows manual theme switching
- Persists theme choice in localStorage
- Provides smooth transitions between themes

## Performance Features

- **Static Generation**: Pages are statically generated for fast loading
- **Image Optimization**: Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting for optimal bundle size
- **SEO Optimized**: Meta tags and semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.