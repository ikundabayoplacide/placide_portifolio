# Technical Documentation - Portfolio Website

## Architecture Overview

### Application Architecture
The portfolio website follows a modern Next.js architecture with the following layers:

\`\`\`
┌─────────────────────────────────────┐
│           Presentation Layer        │
│  (React Components + Tailwind CSS) │
├─────────────────────────────────────┤
│            Business Logic           │
│     (Component State + Hooks)       │
├─────────────────────────────────────┤
│              API Layer              │
│        (Next.js API Routes)         │
├─────────────────────────────────────┤
│            Static Assets            │
│    (Images, Documents, Fonts)       │
└─────────────────────────────────────┘
\`\`\`

### Component Architecture

#### Main Portfolio Component (`app/page.tsx`)
- **Type**: Client Component (`"use client"`)
- **Responsibilities**: 
  - Renders all portfolio sections
  - Manages static data (skills, experience, projects)
  - Handles user interactions and navigation
- **Dependencies**: UI components, icons, images, chatbot

#### Chatbot Component (`components/chatbot.tsx`)
- **Type**: Client Component with state management
- **State Management**: React useState for messages and UI state
- **Features**: 
  - Floating action button interface
  - Message history with scrolling
  - Rule-based response system
  - Responsive design

### API Architecture

#### Chat API (`/api/chat/route.ts`)
\`\`\`typescript
// Request/Response Flow
POST /api/chat
├── Input: { message: string }
├── Processing: Rule-based message matching
└── Output: { message: string }
\`\`\`

#### Document Generation APIs
\`\`\`typescript
// CV Generation
GET /api/download-cv
├── Processing: HTML to PDF conversion
└── Output: PDF file stream

// Cover Letter Generation  
GET /api/download-cover-letter
├── Processing: HTML to PDF conversion
└── Output: PDF file stream
\`\`\`

## Data Models

### Skills Data Structure
\`\`\`typescript
interface Skill {
  name: string;
  category: "Programming" | "Frontend" | "Backend" | "Database" | "Mobile" | "CMS";
}
\`\`\`

### Experience Data Structure
\`\`\`typescript
interface Experience {
  title: string;
  company: string;
  period: string;
  technologies: string[];
  description: string;
}
\`\`\`

### Project Data Structure
\`\`\`typescript
interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
}
\`\`\`

### Chatbot Message Structure
\`\`\`typescript
interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}
\`\`\`

## Styling Architecture

### Design System Implementation

#### CSS Custom Properties
\`\`\`css
:root {
  /* Color System */
  --primary: #059669;        /* Emerald-600 */
  --accent: #0ea5e9;         /* Sky-500 */
  --background: #ffffff;     /* White */
  --foreground: #1f2937;     /* Gray-800 */
  
  /* Typography */
  --font-sans: var(--font-open-sans);
  --font-serif: var(--font-montserrat);
  
  /* Spacing */
  --radius: 0.5rem;          /* 8px border radius */
}
\`\`\`

#### Tailwind Configuration
- **Version**: Tailwind CSS v4
- **Configuration**: Inline theme configuration in globals.css
- **Custom Fonts**: Montserrat (serif), Open Sans (sans-serif)
- **Color Tokens**: Semantic color system with light/dark mode support

### Component Styling Patterns

#### Card Components
\`\`\`typescript
// Standard card pattern
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
\`\`\`

#### Button Patterns
\`\`\`typescript
// Primary button
<Button className="bg-primary hover:bg-primary/90 shadow-lg">

// Outline button  
<Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
\`\`\`

## State Management

### Component State Strategy
- **Local State**: React useState for component-specific state
- **No Global State**: All data is static or locally managed
- **Form State**: Uncontrolled forms with native HTML validation

### Chatbot State Management
\`\`\`typescript
const [isOpen, setIsOpen] = useState(false);
const [messages, setMessages] = useState<Message[]>([]);
const [inputValue, setInputValue] = useState("");
const [isTyping, setIsTyping] = useState(false);
\`\`\`

## Performance Optimizations

### Image Optimization
- **Next.js Image Component**: Automatic WebP conversion and lazy loading
- **Profile Image**: Optimized headshot with proper alt text
- **Placeholder Images**: SVG placeholders for missing images

### Code Splitting
- **Automatic Splitting**: Next.js handles route-based code splitting
- **Component Splitting**: Chatbot component loaded separately
- **Dynamic Imports**: Not currently implemented but available for future use

### Bundle Optimization
- **Tree Shaking**: Automatic unused code elimination
- **Minification**: Production builds automatically minified
- **Compression**: Gzip compression enabled by default

## Security Considerations

### Input Validation
- **Contact Form**: HTML5 validation with required fields
- **Chatbot Input**: Basic sanitization and length limits
- **API Routes**: Input validation for message content

### Content Security
- **Static Content**: All personal data is public by design
- **No Sensitive Data**: No authentication or private information
- **HTTPS**: SSL/TLS encryption for all communications

### XSS Prevention
- **React JSX**: Automatic XSS protection through React
- **Sanitized Outputs**: All dynamic content properly escaped
- **No innerHTML**: Direct HTML injection avoided

## Error Handling

### Client-Side Error Handling
\`\`\`typescript
// Chatbot error handling
try {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: inputValue }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send message');
  }
} catch (error) {
  // Fallback response
  addMessage("I'm sorry, I'm having trouble responding right now. Please try again later.", false);
}
\`\`\`

### API Error Handling
\`\`\`typescript
// API route error handling
export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return Response.json({ error: 'Invalid message' }, { status: 400 });
    }
    
    // Process message...
    
  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
\`\`\`

## Browser Compatibility

### Supported Features
- **ES2020+**: Modern JavaScript features
- **CSS Grid & Flexbox**: Layout systems
- **CSS Custom Properties**: Theme system
- **Fetch API**: HTTP requests
- **Local Storage**: Not currently used but available

### Polyfills
- **Not Required**: Target modern browsers only
- **Graceful Degradation**: Basic functionality works without JavaScript
- **Progressive Enhancement**: Enhanced features with JavaScript enabled

## Development Workflow

### Local Development Setup
\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### File Structure Conventions
- **Components**: PascalCase naming (e.g., `Chatbot.tsx`)
- **API Routes**: kebab-case directories (e.g., `download-cv/`)
- **Styles**: Global styles in `globals.css`
- **Assets**: Organized by type in `public/`

### Code Quality Standards
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (if configured)
- **Component Props**: Proper TypeScript interfaces

## Deployment Architecture

### Vercel Platform Integration
- **Build Process**: Automatic builds on git push
- **Environment**: Node.js 18+ runtime
- **Static Assets**: CDN distribution
- **API Routes**: Serverless functions

### Environment Configuration
\`\`\`typescript
// No environment variables currently required
// Future additions would go in .env.local:
// NEXT_PUBLIC_SITE_URL=https://placideikundabayo.com
\`\`\`

### Build Optimization
- **Static Generation**: Pages pre-rendered at build time
- **Image Optimization**: Automatic WebP conversion
- **CSS Optimization**: Unused CSS removal
- **JavaScript Minification**: Production bundle optimization

## Monitoring and Analytics

### Performance Monitoring
- **Core Web Vitals**: Monitored via Vercel Analytics
- **Bundle Size**: Tracked in build process
- **Load Times**: Optimized for fast initial load

### Error Tracking
- **Client Errors**: Console logging for development
- **API Errors**: Proper HTTP status codes
- **User Experience**: Graceful error handling

## Future Enhancements

### Planned Features
1. **Contact Form Backend**: Email integration for form submissions
2. **Blog Section**: Content management for articles
3. **Project Details**: Individual project pages
4. **Analytics Integration**: Google Analytics or similar
5. **SEO Optimization**: Enhanced meta tags and structured data

### Technical Improvements
1. **Database Integration**: For dynamic content management
2. **Authentication**: Admin panel for content updates
3. **API Optimization**: Caching and rate limiting
4. **Testing Suite**: Unit and integration tests
5. **CI/CD Pipeline**: Automated testing and deployment

---

*Technical Documentation Version: 1.0.0*
*Last Updated: January 2025*
