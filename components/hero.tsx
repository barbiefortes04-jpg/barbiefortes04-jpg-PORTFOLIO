"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Download, Mail, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Professional headshot" />
            <AvatarFallback className="text-2xl">JF</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Jherilyn Fortes
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Aspiring Web Developer | Information Technology Student
            </h2>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Tuguegarao City, Cagayan Valley</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>jherilyn.fortes@email.com</span>
              </div>
            </div>
          </div>

          <Card className="max-w-2xl">
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Highly motivated and ambitious 3rd-year Information Technology student at 
                St. Paul University Philippines, specializing in Web Development. Passionate 
                about applying technical expertise in PHP, Java, Python, and web technologies 
                to solve real-world problems and create innovative digital solutions.
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}