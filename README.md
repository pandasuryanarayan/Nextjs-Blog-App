# Next.js Blog Application

A simple, minimal blog application built with **Next.js** that allows users to view blog posts, each with a title, excerpt, and content. The app is designed with modern styling and includes dynamic pages for each blog post.

## Features

- **Home Page**: Displays a list of blog posts with titles and excerpts. Each title links to the individual blog post page.
- **Dynamic Blog Post Page**: Displays full post content, including the title, content, and publication date.
- **Static Data**: Blog data is stored in a `posts.json` file and fetched using `getStaticProps` and `getStaticPaths` for static generation.
- **Back Link**: Includes a back link to navigate from the blog post back to the home page.

## Installation

### Prerequisites
- Node.js (>= 18.x)
- npm or yarn

### Steps to get started:

1. Clone the repository:
   ```bash
   git clone https://github.com/pandasuryanarayan/Nextjs-Blog-App.git
   ```

2. Install dependencies:
   ```bash
   cd nextjs-blog
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Visit the app at [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `pages/`: Contains all the routes for the application.
  - `index.js`: Home page that lists all blog posts.
  - `posts/[id].js`: Dynamic page that shows the full content of each blog post.
- `styles/`: Contains the CSS files.
  - `HomePage.module.css`: Styles for the home page.
  - `PostPage.module.css`: Styles for the blog post page.
  - `global.css`: Global Styles or common blog page styles.
- `public/`: Contains static assets like the `back.svg` icon.
- `data/`: Contains `posts.json` with the blog data.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: Used for scoping styles locally to the components.
- **SVG**: Used for the back arrow icon.

### Key Sections in the README:
- **Features**: A brief overview of the main features of the app.
- **Installation**: Step-by-step instructions on how to set up and run the app.
- **Folder Structure**: A description of the project’s file organization.
- **Technologies Used**: The technologies and tools used to build the app.
