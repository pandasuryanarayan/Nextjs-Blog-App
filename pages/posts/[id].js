// pages/posts/[id].js
import fs from "fs";
import path from "path";
import Link from "next/link";
import styles from "../../styles/Post.module.css";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(jsonData);

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(jsonData);

  const post = posts.find((post) => post.id === params.id);

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDate}>
        <small>{post.date}</small>
      </p>

      {/* Render each paragraph */}
      {post.contents.map((para, index) => (
        <p key={index} className={styles.postContent}>
          {para}
        </p>
      ))}

      {/* Back to home link */}
      <div className={styles.backLink}>
        <Link href="/" className={styles.link}>
          <span>
            <img src="/back.svg" width="14" height="14" /> Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
