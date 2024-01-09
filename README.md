# INFOMOVIA Movie Database

Welcome to the documentation for the Next.js Movie Database application. This application is built using Next.js, React, Tailwind CSS, Auth0 for authentication, and NextAuth.js for handling authentication flows. It provides users with the ability to explore information about movies, TV shows, and celebrities in a user-friendly interface.

## 1. Getting Started

### 1.1 Installation

Before running the application, make sure you have Node.js installed on your system. If not, you can download it from [nodejs.org](https://nodejs.org/).

To install the necessary dependencies, navigate to the root directory of your project and run:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Dependencies
The Next.js Movie Database application is built using the following technologies and libraries:

- Next.js
- React
- Tailwind CSS
- Auth0
- NextAuth.js
- Tanstack

### 3 Configuration
You will need to set up some configuration variables before running the application. Create a .env.local file in the root of your project and add the following variables:
```bash
# Auth0 Configuration
AUTH0_DOMAIN=<Your Auth0 Domain>
AUTH0_CLIENT_ID=<Your Auth0 Client ID>
AUTH0_CLIENT_SECRET=<Your Auth0 Client Secret>
AUTH0_REDIRECT_URI=http://localhost:3000/api/auth/callback

# The Movie Database (TMDb) API
TMDB_API_KEY=<Your TMDb API Key>
```
