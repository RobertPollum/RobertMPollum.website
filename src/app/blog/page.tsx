import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'
import styles from './blog.module.css'

export const metadata = {
  title: 'Blog — Robert Michael Pollum',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet — check back soon.</p>
      ) : (
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className={styles.postMeta}>{formatDate(post.date)}</p>
              {post.description && (
                <p className={styles.postDescription}>{post.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
