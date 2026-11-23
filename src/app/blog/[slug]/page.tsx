import Link from 'next/link'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import { getAllSlugs, getPost, formatDate } from '@/lib/posts'
import styles from '../blog.module.css'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Robert Michael Pollum`,
    description: post.description,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        &larr; All posts
      </Link>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDate}>{formatDate(post.date)}</p>
      <article className={`${styles.markdown} markdown-body`}>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  )
}
