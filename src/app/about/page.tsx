import styles from './about.module.css'
import blogStyles from '../blog/blog.module.css'

export const metadata = {
  title: 'About — Robert Michael Pollum',
}

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About</h1>

      <section className={styles.section}>
        <h2>Who I am</h2>
        <p>
          {/* TODO: personalize */}
          I&apos;m Robert — a software developer who enjoys building things across
          the stack, self-hosting my own infrastructure, and occasionally
          writing about what I learn along the way.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What I do</h2>
        <ul className={styles.list}>
          <li>Full-stack web development</li>
          <li>Self-hosted services and homelab tinkering</li>
          <li>Small front-end experiments and demos</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Elsewhere</h2>
        <p>
          Find me on{' '}
          <a
            href="https://github.com/RobertPollum"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/robert-pollum-aa88b6b2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , and{' '}
          <a
            href="https://jsfiddle.net/u/UnderPenalty/fiddles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSFiddle
          </a>
          .
        </p>
      </section>
    </main>
  )
}
