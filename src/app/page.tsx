import Link from 'next/link'
import styles from './page.module.css'
import blogStyles from './blog/blog.module.css'
import { getAllPosts, formatDate } from '@/lib/posts'
import { projects } from '@/lib/projects'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Robert Michael Pollum</h1>
          <p className={styles.tagline}>
            Software developer. I build things, break things, and write about
            both here.
          </p>
          <div className={styles.heroLinks}>
            <Link href="/about" className={styles.button}>
              About
            </Link>
            <Link href="/blog" className={styles.button}>
              Blog
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.grid}>
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Recent posts <Link href="/blog" className={styles.allPosts}>View all</Link>
          </h2>
          {recentPosts.length === 0 ? (
            <p className={styles.muted}>No posts yet.</p>
          ) : (
            <ul className={blogStyles.postList}>
              {recentPosts.map((post) => (
                <li key={post.slug} className={blogStyles.postItem}>
                  <Link href={`/blog/${post.slug}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p className={blogStyles.postMeta}>{formatDate(post.date)}</p>
                  {post.description && (
                    <p className={blogStyles.postDescription}>
                      {post.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}
