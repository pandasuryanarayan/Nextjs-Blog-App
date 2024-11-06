// pages/index.js
import Link from "next/link";
import fs from "fs";
import path from "path";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(jsonData);

  return {
    props: {
      posts,
    },
  };
}

export default function HomePage({ posts }) {
  const formatTitleForURL = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  return (
    <>
      <Head>
        <title>My Blog - Home</title>
        <meta
          name="description"
          content="Welcome to my blog where I share insights on various topics."
        />
        <link rel="icon" href="/blog.ico" />
      </Head>

      <div className={styles.container}>
        <h1>Blogs</h1>
        <ul className={styles.blogList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.blogItem}>
              <h2 className={styles.blogTitle}>
                <Link
                  href={`/posts/${post.id}-${formatTitleForURL(post.title)}`}
                  className={styles.link} >
                  {post.title}
                </Link>
              </h2>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
