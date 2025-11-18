import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.doe@email.com",
      href: "mailto:john.doe@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/johndoe"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/johndoe"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/johndoe"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Let's Work Together</CardTitle>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon
                      return (
                        <a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">{contact.label}</p>
                            <p className="text-sm text-muted-foreground">{contact.value}</p>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="lg"
                          className="w-full justify-start gap-3"
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-5 w-5" />
                            {social.label}
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t">
                    <Button size="lg" className="w-full">
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}