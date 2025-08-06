import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* 英雄區塊 */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            嗨，我是
            <span
              className={`${styles.highlight} animate__animated animate__tada`}
            >
              黃仁豪
            </span>
            <span className={styles.titleDesc}>前端開發工程師</span>
          </h1>
          <p className={styles.subtitle}>
            專精於React與Next.js開發，熟悉現代前端技術與響應式設計
          </p>
          <div className={styles.ctaContainer}>
            <Link href="/resume" className={styles.primaryBtn}>
              查看我的履歷
            </Link>
            <Link href="/projects" className={styles.secondaryBtn}>
              作品集
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.glowCircle}></div>
        </div>
      </section>

      {/* 關於我區塊 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>關於我</span>
          <h2 className={styles.sectionTitle}>從物理學到前端開發的轉職之路</h2>
        </div>
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            有志於成為前端工程師的轉職者，專精於React與Next.js開發。擁有製程工程背景，能將系統性分析與問題解決方法論應用於前端開發過程，確保程式碼品質與效能優化。透過資展國際前端工程師養成班培訓，熟練掌握現代網頁開發技術與RWD響應式設計。運用React組件架構創建直覺且功能性強大的使用者介面，具備API整合與資料庫管理能力。
          </p>
          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2+</span>
              <span className={styles.statLabel}>年工程經驗</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>TOEIC</span>
              <span className={styles.statLabel}>800分</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2</span>
              <span className={styles.statLabel}>專案作品</span>
            </div>
          </div>
        </div>
      </section>

      {/* 技能區塊 */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>我的技能</span>
          <h2 className={styles.sectionTitle}>專業技術與能力</h2>
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🌐</div>
            <h3 className={styles.skillTitle}>前端開發</h3>
            <p className={styles.skillDesc}>
              HTML, CSS, JavaScript (ES6), React.js, Next.js 15, Supabase, 
              PostgreSQL, Bootstrap, Tailwind CSS, RWD, UI/UX, API串接
            </p>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>⚙️</div>
            <h3 className={styles.skillTitle}>後端開發</h3>
            <p className={styles.skillDesc}>
              Node.js, Express, API設計與整合, JWT授權驗證, MySQL, PostgreSQL, 
              Supabase, 資料庫設計, Row Level Security
            </p>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🔧</div>
            <h3 className={styles.skillTitle}>開發工具</h3>
            <p className={styles.skillDesc}>
              Git版本控制, js-cookie, WebSocket即時通訊, MCP串接LLM, Docker, GCP
            </p>
          </div>
          <div className={styles.skillCard}>
            <div className={styles.skillIcon}>🧠</div>
            <h3 className={styles.skillTitle}>軟實力</h3>
            <p className={styles.skillDesc}>
              適應力與快速學習能力, 專案與時間管理, 團隊協作與溝通能力,
              問題分析與解決思維, 技術文件閱讀能力
            </p>
          </div>
        </div>
      </section>

      {/* 快速連結 */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>有興趣了解更多嗎？</h2>
        <p className={styles.ctaDesc}>
          查看我的詳細履歷或瀏覽我的電商平台與寵物認養網站專案
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/resume" className={styles.primaryBtn}>
            查看履歷
          </Link>
          <Link href="/projects" className={styles.secondaryBtn}>
            瀏覽作品集
          </Link>
        </div>
      </section>
    </div>
  )
}
