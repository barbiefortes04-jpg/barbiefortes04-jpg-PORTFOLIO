export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Jherilyn Fortes. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">
              Back to Top
            </a>
            <a href="mailto:jherilyn.fortes@email.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            Built with Next.js 15, TypeScript, and Tailwind CSS. 
            Designed with Shadcn UI components.
          </p>
        </div>
      </div>
    </footer>
  )
}