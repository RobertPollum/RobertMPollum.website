import fs from 'fs'
import path from 'path'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

export interface Post extends PostMeta {
  content: string
}

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'posts')

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { meta: {}, content: raw }
  }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    meta[key] = value
  }

  return { meta, content: match[2] }
}

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
  const { meta, content } = parseFrontmatter(raw)

  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? '',
    description: meta.description ?? '',
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { slug, title, date, description } = readPostFile(f)
      return { slug, title, date, description }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | undefined {
  const filename = `${slug}.md`
  const filePath = path.join(POSTS_DIR, filename)
  if (!fs.existsSync(filePath)) return undefined
  return readPostFile(filename)
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function formatDate(date: string): string {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
