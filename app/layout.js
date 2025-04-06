import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: '黃仁豪 | 個人網站',
  description: '展示我的專業履歷、技能和前端開發項目作品集',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              <Link href="/">黃仁豪</Link>
            </div>
            <nav className="navbar-links">
              <Link href="/" className="nav-link">
                首頁
              </Link>
              <Link href="/resume" className="nav-link">
                履歷
              </Link>
              <Link href="/projects" className="nav-link">
                作品集
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-copyright">
              © {new Date().getFullYear()} 黃仁豪 - 版權所有
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
