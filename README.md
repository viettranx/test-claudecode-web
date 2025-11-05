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

## License

MIT
