# Campbell’s Corner

### Website: [https://campbells-corner.vercel.app](https://campbells-corner.vercel.app)

This is my personal website, where I introduce myself, showcase my projects, share my thoughts, and review the tech gear I use in my career as a front-end web developer.

## Tech stack

- [Next.js](https://nextjs.org)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote.git)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://framer.com/motion)

## Project structure

```
campbells-corner/
 ├─ contents/ # Post content files
 ├─ public/ # Static image, icon files
 └─ src/
     ├─ app/ # App router files
     ├─ components/ # React component files
     ├─ constants/ # Constants for pages and components
     ├─ libs/ # Non-React files (types, actions, etc.)
     └─ utils/ # Utility fuctions and helper methods
```

*All page content is render automatically based on markdown files in the `contents/` folder.*
