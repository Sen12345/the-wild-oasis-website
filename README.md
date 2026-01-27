# Overview
### This customer-facing web application is built with React and Next.js and demonstrates modern frontend best practices. It showcases the Next.js App Router, secure authentication with NextAuth, and multiple rendering strategies—including SSR, SSG, and ISR—to deliver optimized performance and scalability. The application leverages Supabase as the backend, providing a PostgreSQL database, authentication support, and server-side data management.
## User Interaction
* Users can reserve a cabin by selecting dates using React DayPicker
* Users can select the number of guests
* Users can include a message with relevant details for customer service regarding their booking
## Tech Stack
* Frontend: React, Next.js (App Router)
* Authentication: NextAuth
* Backend: Supabase (PostgreSQL, Auth, API)
* Rendering Strategies: SSR, SSG, ISR
* UI Components: React DayPicker
## Features
* Cabin reservation with date selection
* Guest count selection
* Custom message input for customer service
* Secure user authentication
* Optimized rendering for performance and scalability
## User Interaction
* Users can reserve a cabin by selecting available dates using React DayPicker
* Users can select the number of guests for their stay
* Users can include a message with relevant details for customer service regarding their booking
## Rendering Strategy
* Server-Side Rendering (SSR): Used for authenticated and dynamic user-specific content
* Static Site Generation (SSG): Used for static pages to improve load times
* Incremental Static Regeneration (ISR): Enables content updates without full rebuilds
## Backend
Supabase is used as the backend platform, providing:
* A PostgreSQL database for persistent data storage
* Authentication services supporting secure user sessions
* API access for server-side data operations and mutations
## Architecture Overview
* Next.js App Router handles routing, layouts, and server components
* NextAuth manages authentication and session handling
* Supabase stores application data and supports backend operations
* Server Components & Route Handlers are used where appropriate for data fetching and mutations
* Client Components handle interactive UI elements such as date selection and form input
## Getting Started
### Prerequisites
* Node.js (v18 or later recommended)
* npm, yarn, or pnpm
* A Supabase project
## Installation
+ Clone the repository:
bash
git clone <repository-url>
cd <project-folder>
+ Install dependencies:
bash
npm install
+ Create a .env.local file in the root of the project and add the required environment variables.
## Environment Variables
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=your-nextauth-secret
- SUPABASE_URL=your-supabase-project-url
- SUPABASE_ANON_KEY=your-supabase-anon-key
## Running the Development Server
npm run dev
### The application will be available at:
http://localhost:3000
## Future Improvements
* Availability conflict validation for reservations
* Admin dashboard for managing cabins and bookings
* Email notifications for booking confirmations
* Improved accessibility and form validation
### Launch the app from here: https://the-wild-oasis-website-iota-five.vercel.app/

