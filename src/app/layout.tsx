import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ResponsiveAppBar from '@/components/header/app-bar'
import ThemeRegistry from '@/components/theme/theme-registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Robert Michael Pollum',
  description: 'Self Hosted Personal Developer Profile',
}

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var mode = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = mode;
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <ResponsiveAppBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
