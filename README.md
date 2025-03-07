# Science Illustrators - Astro + React + Shadcn UI + Tailwind CSS

A minimal Astro project that demonstrates how to integrate React, Shadcn UI components, and content sourced from markdown files.

## Features

- 🚀 Astro framework for fast, optimized websites
- ⚛️ React for interactive components
- 🎨 Tailwind CSS for styling
- 🧩 Shadcn UI for beautiful, accessible components
- 📝 Markdown content integration
- 🔄 Content collections for organized content management

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/scienceillustrators.org.git
cd scienceillustrators.org
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── components/    # React and Astro components
│   │   └── ui/        # Shadcn UI components
│   ├── content/       # Markdown content
│   │   └── articles/  # Blog articles
│   ├── layouts/       # Page layouts
│   ├── lib/           # Utility functions
│   ├── pages/         # Astro pages
│   └── styles/        # Global styles
└── package.json
```

## How Markdown Integration Works

This project uses Astro's content collections to manage markdown content:

1. **Content Definition**: Collections are defined in `src/content/config.ts`, specifying the schema for each content type.

2. **Content Creation**: Markdown files are stored in the `src/content/articles` directory, with frontmatter containing metadata like title, date, and author.

3. **Content Retrieval**: The `getCollection()` function is used to fetch content from collections.

4. **Content Rendering**: Content is rendered on pages using Astro's built-in markdown rendering capabilities.

## Extending with More Content

To add more content types:

1. Define a new collection in `src/content/config.ts`
2. Create a folder in `src/content/` for your new collection
3. Add markdown files to this folder
4. Create pages that query and display this content

Example of adding a "projects" collection:

```typescript
// src/content/config.ts
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'articles': articlesCollection,
  'projects': projectsCollection,
};
```

Then create `src/content/projects/project-1.md`, etc.

## Built With

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)

## License

MIT