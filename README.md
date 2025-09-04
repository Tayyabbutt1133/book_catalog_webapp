
![dataflow](https://github.com/user-attachments/assets/435ce606-9e3c-449a-8591-038c7458d16f)
# Bookify - Personal Book Catalog App

A  full-stack book management application built with latest Nextjs 15, featuring Google OAuth authentication, CRUD operations.

## Features

### Core Features

- **Book Management**: Add, view, edit, and delete books from your personal catalog
- **Book Details**: View comprehensive information including title, author, and genre

### Authentication

- **Google OAuth Integration**: Secure sign-in using Google accounts via NextAuth.js
- **Session Management**: Persistent user sessions with automatic redirects
- **Protected Routes**: Once logged in, can’t access home/landing page using protected route.

### Technical Features

- **Server-Side Rendering**: Next.js 14 with App Router
- **Type Safety**: Full TypeScript implementation
- **Database Integration**: Prisma ORM with PostgreSQL/Neon
- **Form Validation**: Zod schema validation for data integrity
- **API Routes**: Nextjs RESTful API endpoints for book operations
- **Toast Notifications**: User feedback for all operations

## Live Demo

**Deployment Link**: https://book-catalog-webapp.vercel.app/

## Tech Stack

### Frontend

- **Next.js  Latest version**
- **TypeScript**
- **Tailwind CSS**
- **React Icons**

### Backend

- **Next.js API Routes**
- **Prisma ORM**
- **PostgreSQL**(Database)
- **Zod** (Validation)

### Authentication

- **NextAuth.js**
- **Google OAuth Provider**

### Additional Libraries

- **React Toastify** (Notifications)
- **Axios** (HTTP Client)
- **HTTP Status Codes**

## Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Database** (PostgreSQL/Neon)
- Google OAuth Credentials

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Tayyabbutt1133/book_catalog_webapp.git

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install

```

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/bookify"
# For MySQL, use: "mysql://username:password@localhost:3306/bookify"

# NextAuth Configuration
NEXTAUTH_SECRET="any randome string"

# Google OAuth Credentials
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Application Base URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000/" (You need to change it with deployed base url in cloud env files)

```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set Application type to "Web application"
6. Add authorized redirect URIs:
    - `http://localhost:3000/api/auth/callback/google` (for development)
    - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy Client ID and Client Secret to your `.env.local`

### 5. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) Seed the database
npx prisma db seed

```

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev

```

Visit [http://localhost:3000](http://localhost:3000/) to see the application.

## Authentication Flow

### Login Process

1. User clicks "Sign in with Google" on the landing page
2. Redirected to Google OAuth consent screen
3. After successful authentication, user is redirected back to the app
4. NextAuth.js creates a session and stores user information
5. User is automatically redirected to the dashboard

### Protected Routes

- `/dashboard` - Main dashboard with book listing
- `/dashboard/add-form` - Add new book form
- `/dashboard/book/[id]` - Individual book details

### Session Management

- Sessions persist across browser sessions
- Automatic redirect to dashboard if user is already logged in
- Logout functionality clears session and redirects to home page

## Project Structure

```
bookify/
├── app/
│   ├── (routes)/
│   │   ├── dashboard/          # Protected dashboard routes
│   │   │   ├── add-form/       # Add book form
│   │   │   ├── book/[id]/      # Book details page
│   │   │   └── layout.tsx      # Dashboard layout
│   │   ├── Landingweb/         # Landing page
│   │   └── (auth)/
│   │       └── login/          # Login page
│   ├── api/
│   │   ├── books/              # Book CRUD operations
│   │   └── auth/               # NextAuth configuration
│   ├── components/
│   │   ├── authentication/     # Auth components
│   │   ├── bookslisting/       # Book listing components
│   │   ├── landingpage/        # Landing page components
│   │   └── fonts/              # Font configurations
│   ├── utils/
│   │   ├── schema/             # Zod validation schemas
│   │   └── prisma.ts           # Prisma client
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/
│   └── assets/                 # Images and static assets
├── prisma/
│   └── schema.prisma           # Database schema
└── package.json

```

## API Endpoints

### Books API

- `GET /api/books` - Retrieve all books
- `POST /api/books` - Create a new book
- `GET /api/books/[id]` - Get specific book by ID
- `DELETE /api/books/[id]` - Delete specific book

### Authentication API

- `GET/POST /api/auth/[...nextauth]` - NextAuth.js endpoints

## UI Components

### Key Components

- **BookCard**: Individual book display with actions
- **DeleteModal**: Confirmation dialog for book deletion
- **Navbar**: Navigation with authentication status
- **Hero**: Landing page hero section
- **Spinner**: Loading indicator
- **Button**: Reusable button component
