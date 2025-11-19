"use client"

import { usePathname } from 'next/navigation'
import { FloatingChat } from './floating-chat'

export function ConditionalFloatingChat() {
  const pathname = usePathname()
  
  // Show floating chat only on main portfolio pages
  const showFloatingChat = pathname === '/' || 
                          pathname === '/projects' || 
                          pathname === '/demo' || 
                          pathname === '/github' || 
                          pathname === '/mcp-integration' || 
                          pathname === '/professional'
  
  if (!showFloatingChat) {
    return null
  }

  return <FloatingChat />
}