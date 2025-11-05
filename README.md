# Daily.dev Clone

A modern developer news aggregator inspired by daily.dev, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📰 Clean and modern UI for browsing tech articles
- 🎨 Responsive design that works on all devices
- 🏷️ Popular tags and filtering options
- 📱 Mobile-friendly interface
- 🌙 Dark mode design
- ⚡ Fast and optimized with Next.js App Router

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** Mock JSON files

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── common/           # Shared components
│   │   ├── Header.tsx   # Navigation header
│   │   └── Sidebar.tsx  # Sidebar with tags
│   └── feed/            # Feed-related components
│       ├── ArticleCard.tsx  # Article card
│       └── Feed.tsx         # Main feed
├── data/                 # Mock data
│   ├── articles.json    # Article data
│   └── tags.json        # Tags data
├── types/               # TypeScript types
│   └── article.ts      # Article types
└── lib/                # Utility functions

```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Breakdown

### Components

- **Header**: Navigation bar with search, logo, and action buttons
- **ArticleCard**: Displays individual article with image, title, description, tags, and engagement metrics
- **Feed**: Grid layout for displaying multiple articles
- **Sidebar**: Shows popular tags, filters, and additional information

### Mock Data

The application uses JSON files for mock data:
- **articles.json**: Contains 12 sample tech articles with metadata
- **tags.json**: Popular programming tags with colors

## Customization

You can easily customize the app by:

1. **Adding more articles**: Edit `data/articles.json`
2. **Adding tags**: Edit `data/tags.json`
3. **Changing colors**: Modify Tailwind classes in components
4. **Adding features**: Create new components in the `components` directory

## Deployment

### Deploy to Netlify

This project includes automatic deployment to Netlify via GitHub Actions.

#### Setup Instructions:

1. **Create a Netlify account** at [netlify.com](https://netlify.com)

2. **Create a new site** on Netlify:
   - Go to Sites → Add new site → Import an existing project
   - Skip the Git connection (we'll use GitHub Actions)
   - Or create a new site from the Netlify CLI

3. **Get your Netlify credentials**:
   - **NETLIFY_AUTH_TOKEN**:
     - Go to User Settings → Applications → Personal Access Tokens
     - Create a new access token
   - **NETLIFY_SITE_ID**:
     - Go to Site Settings → General → Site details
     - Copy the API ID

4. **Add secrets to your GitHub repository**:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add two secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

5. **Deploy**:
   - Push to the `main` branch or create a pull request
   - GitHub Actions will automatically build and deploy your site
   - Check the Actions tab to see deployment progress

#### Manual Deployment:

You can also deploy manually using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Other Deployment Options

- **Vercel**: Click the "Deploy" button on [vercel.com](https://vercel.com)
- **AWS Amplify**: Connect your repository in the Amplify console
- **GitHub Pages**: Build and deploy static export
- **Docker**: Create a Dockerfile and deploy to any container platform

## License

MIT
