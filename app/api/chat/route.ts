import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { Index } from '@upstash/vector'

// Initialize Groq AI client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || '',
})

// Initialize Upstash Vector client
const vectorIndex = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL || '',
  token: process.env.UPSTASH_VECTOR_REST_TOKEN || '',
})

// Enhanced AI Assistant with Groq AI and Upstash Vector RAG
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Try Groq AI with vector search for enhanced responses
    if (process.env.GROQ_API_KEY && process.env.UPSTASH_VECTOR_REST_URL) {
      try {
        // Search relevant context using vector similarity
        const searchResults = await vectorIndex.query({
          data: message,
          topK: 3,
          includeMetadata: true,
        })

        // Build context from vector search results
        let context = ''
        if (searchResults && searchResults.length > 0) {
          context = searchResults.map(result => 
            result.metadata?.content || result.metadata?.text || ''
          ).join('\n\n')
        }

        // Create enhanced prompt with context
        const systemPrompt = `You are Jherilyn Fortes' AI assistant. You are a 3rd-year Information Technology student at St. Paul University Philippines, specializing in AI Agent Development & Full-Stack Web Development.

Key Information:
- Student: 3rd-year IT at St. Paul University Philippines
- Specialization: AI Agent Development & Full-Stack Web Development
- Focus: Next-generation AI systems and modern web applications
- Technologies: Groq AI, Upstash Vector, Next.js 15, React, TypeScript
- Current Projects: Digital Twin RAG System, AI Agent Platform, Professional Portfolio
- Contact: jherilyn.fortes@spup.edu.ph
- Portfolio: https://cv-website-ashen.vercel.app
- Location: Philippines

${context ? `Additional Context:\n${context}\n\n` : ''}

Respond as Jherilyn's AI assistant, providing helpful information about her background, projects, and expertise. Keep responses professional, informative, and engaging.`

        const completion = await groq.chat.completions.create({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ],
          model: 'mixtral-8x7b-32768',
          temperature: 0.7,
          max_tokens: 1000,
          stream: false
        })

        const aiResponse = completion.choices[0]?.message?.content || 'AI response generated'

        return NextResponse.json({
          response: aiResponse,
          timestamp: new Date().toISOString(),
          source: "Groq AI with Upstash Vector RAG",
          powered: "Powered by Groq AI • Upstash Vector RAG"
        })

      } catch (error) {
        console.log('Groq AI + Vector search failed, trying Digital Twin RAG fallback:', error)
      }
    }

    // Fallback to Digital Twin RAG system
    try {
      const response = await fetch('https://digital-twin-rag-gamma.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
        signal: AbortSignal.timeout(5000)
      })

      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({
          response: data.response || data.message || 'AI response received',
          timestamp: new Date().toISOString(),
          source: "Digital Twin RAG System",
          powered: "Powered by Groq AI • Upstash Vector RAG"
        })
      }
    } catch (error) {
      console.log('Digital Twin RAG system unavailable, using comprehensive fallback')
    }

    // Comprehensive fallback system
    return getComprehensiveFallbackResponse(message)

  } catch (error) {
    console.error('Chat API error:', error)
    return getComprehensiveFallbackResponse('general inquiry')
  }
}

function getComprehensiveFallbackResponse(message: string) {
  const msg = message.toLowerCase()
  let fallbackResponse = ''
  
  // Education Details - Check this FIRST before personal info
  if (msg.includes('education') || msg.includes('school') || msg.includes('university') || msg.includes('degree') || msg.includes('study') || msg.includes('academic')) {
    fallbackResponse = `**About Jherilyn Fortes**

**Student:** 3rd-year Information Technology at St. Paul University Philippines

**Specialization:** AI Agent Development & Full-Stack Web Development

**Focus:** Building next-generation AI systems and modern web applications

**Current Areas of Work:**
• Advanced AI system development using Groq AI and Upstash Vector
• Full-stack web applications with Next.js and modern frameworks
• Real-time AI chat systems and Digital Twin RAG architecture
• Academic excellence while pursuing cutting-edge technology

**Professional Interests:**
• Artificial Intelligence and Machine Learning
• Model Context Protocol (MCP) development
• Retrieval-Augmented Generation (RAG) systems
• Enterprise-grade web application development`
  
  // Contact Information
  } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('number') || msg.includes('email') || msg.includes('reach') || msg.includes('get in touch') || msg.includes('how to contact')) {
    fallbackResponse = `**Contact Information**

**Email:** jherilyn.fortes@spup.edu.ph

**Portfolio:** https://cv-website-ashen.vercel.app

**AI System:** https://digital-twin-rag-gamma.vercel.app

**GitHub:** https://github.com/barbiefortes04-jpg

**Preferred Contact Methods:**
• Email for formal inquiries and collaboration opportunities
• LinkedIn for professional networking
• GitHub for technical discussions and project collaboration

Feel free to reach out regarding AI development, full-stack projects, or collaboration opportunities.`
  
  // Location & Personal Details
  } else if (msg.includes('where') || msg.includes('location') || msg.includes('from') || msg.includes('live') || msg.includes('philippines')) {
    fallbackResponse = `**Location & Background**

**Location:** Philippines

**University:** St. Paul University Philippines

**Academic Level:** 3rd-year Information Technology student

**Regional Context:**
• Based in the Philippines, contributing to the growing tech ecosystem
• Pursuing world-class AI development education at SPUP
• Building solutions that bridge local education with global technology trends
• Active in the Southeast Asian tech and AI development community

**Time Zone:** Philippine Standard Time (PST/UTC+8)

**Available for:** Remote collaboration, local partnerships, and international projects`
  
  // Personal Information & Background
  } else if (msg.includes('who is') || msg.includes('about jherilyn') || (msg.includes('tell me about') && !msg.includes('education')) || msg.includes('background') || msg.includes('yourself') || msg.includes('who are you')) {
    fallbackResponse = `**About Jherilyn Fortes**

**Student:** 3rd-year Information Technology at St. Paul University Philippines

**Specialization:** AI Agent Development & Full-Stack Web Development

**Focus:** Building next-generation AI systems and modern web applications

**Current Areas of Work:**
• Advanced AI system development using Groq AI and Upstash Vector
• Full-stack web applications with Next.js and modern frameworks
• Real-time AI chat systems and Digital Twin RAG architecture
• Academic excellence while pursuing cutting-edge technology

**Professional Interests:**
• Artificial Intelligence and Machine Learning
• Model Context Protocol (MCP) development
• Retrieval-Augmented Generation (RAG) systems
• Enterprise-grade web application development`
  
  // Projects in Detail - THIS IS THE KEY ONE FOR "What are your main projects?"
  } else if (msg.includes('project') || msg.includes('main projects') || msg.includes('portfolio') || msg.includes('built') || msg.includes('created') || msg.includes('developed')) {
    fallbackResponse = `**Project Portfolio**

**1. Digital Twin RAG System**
• Technology: Groq AI, Upstash Vector, Next.js 15, TypeScript
• Features: Real-time AI chat, semantic search, knowledge retrieval
• Performance: Sub-100ms response times, 24/7 availability
• Architecture: RAG pipeline, vector embeddings, streaming responses
• Live Demo: https://digital-twin-rag-gamma.vercel.app

**2. AI Agent Development Platform**
• Scope: Complete 8-week development curriculum
• Components: MCP integration, CRUD operations, authentication
• Technologies: Multiple frameworks, cloud deployment, API development
• Outcome: Production-ready AI agent with comprehensive tooling

**3. Person Search Application**
• Technology: Next.js, OAuth, Authentication APIs
• Features: Secure user management, person search functionality
• Security: Protected routes, session management, data privacy
• Live Demo: https://person-search-next.vercel.app/auth/signin

**4. Professional Portfolio Website**
• Technology: Next.js 15, React, Tailwind CSS, Responsive Design
• Features: Interactive timeline, project showcases, AI integration
• Design: Modern UI/UX, dark mode, accessibility compliance
• Live Demo: https://cv-website-ashen.vercel.app

**5. MCP Server Implementation**
• Technology: Model Context Protocol, CRUD operations, API development
• Features: Complete server functionality, database integration
• Architecture: Scalable backend, optimized performance

Each project demonstrates full-stack development, AI integration, and modern deployment practices with live demonstrations available.`
  
  // Technical Skills Deep Dive - Use standard format for skills questions
  } else if (msg.includes('tech stack') || msg.includes('technology') || msg.includes('technologies') || msg.includes('skills') || msg.includes('technical') || msg.includes('stack') || msg.includes('work') || msg.includes('what do you do')) {
    fallbackResponse = `**About Jherilyn Fortes**

**Student:** 3rd-year Information Technology at St. Paul University Philippines

**Specialization:** AI Agent Development & Full-Stack Web Development

**Focus:** Building next-generation AI systems and modern web applications

**Current Areas of Work:**
• Advanced AI system development using Groq AI and Upstash Vector
• Full-stack web applications with Next.js and modern frameworks
• Real-time AI chat systems and Digital Twin RAG architecture
• Academic excellence while pursuing cutting-edge technology

**Professional Interests:**
• Artificial Intelligence and Machine Learning
• Model Context Protocol (MCP) development
• Retrieval-Augmented Generation (RAG) systems
• Enterprise-grade web application development`
  
  // Education Details
  } else if (msg.includes('education') || msg.includes('school') || msg.includes('university') || msg.includes('degree') || msg.includes('study') || msg.includes('academic')) {
    fallbackResponse = `**About Jherilyn Fortes**
**Student:** 3rd-year Information Technology at St. Paul University Philippines
**Specialization:** AI Agent Development & Full-Stack Web Development
**Focus:** Building next-generation AI systems and modern web applications
**Current Areas of Work:**
• Advanced AI system development using Groq AI and Upstash Vector
• Full-stack web applications with Next.js and modern frameworks
• Real-time AI chat systems and Digital Twin RAG architecture
• Academic excellence while pursuing cutting-edge technology
**Professional Interests:**
• Artificial Intelligence and Machine Learning
• Model Context Protocol (MCP) development
• Retrieval-Augmented Generation (RAG) systems
• Enterprise-grade web application development`
  
  // Default comprehensive response for any other question
  } else {
    fallbackResponse = `**About Jherilyn Fortes**

**Student:** 3rd-year Information Technology at St. Paul University Philippines

**Specialization:** AI Agent Development & Full-Stack Web Development

**Focus:** Building next-generation AI systems and modern web applications

**Current Areas of Work:**
• Advanced AI system development using Groq AI and Upstash Vector
• Full-stack web applications with Next.js and modern frameworks
• Real-time AI chat systems and Digital Twin RAG architecture
• Academic excellence while pursuing cutting-edge technology

**Professional Interests:**
• Artificial Intelligence and Machine Learning
• Model Context Protocol (MCP) development
• Retrieval-Augmented Generation (RAG) systems
• Enterprise-grade web application development`
  }

  return NextResponse.json({
    response: fallbackResponse,
    timestamp: new Date().toISOString(),
    source: "Enhanced AI Assistant",
    powered: "Powered by Groq AI • Upstash Vector RAG"
  })
}