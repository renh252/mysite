import styles from './projects.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  // 項目數據
  const projects = [
    {
      id: 1,
      title: '毛孩之家 - 寵物認養平台',
      description:
        '致力於打造一個直觀易用的寵物認養平台，幫助流浪動物尋找新家。平台結合 Next.js 前端與後端 API Routes，實現了智能推薦、數位化領養流程、愛心社群互助和透明捐款等功能。我負責 UI 組件設計、前台領養流程開發及完整後台系統設計。',
      tech: ['Next.js 14', 'React-Bootstrap', 'MySQL', 'JWT', '綠界支付'],
      image: '/placeholder-image.png',
      year: '2024',
      demoLink: '#',
      codeLink: 'https://github.com/renh252/final',
    },
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>專案作品集</h1>
        <p className={styles.subtitle}>
          展示我開發的寵物認養平台專案，專注於提供流浪動物一個溫暖的家
        </p>
      </section>

      <div className={styles.projectDetail}>
        <h2 className={styles.sectionTitle}>毛孩之家 - 寵物認養平台</h2>

        <div className={styles.projectSummary}>
          <div className={styles.projectImageLarge}></div>
          <div className={styles.projectDescription}>
            <p>
              「毛孩之家」是一個專為流浪寵物設計的認養平台，旨在為牠們尋找永久的家。作為資展國際前端工程師養成班的結業專案，我與團隊成員共同開發了這個平台。
            </p>

            <h3 className={styles.featureTitle}>主要功能</h3>
            <ul className={styles.featureList}>
              <li>智能推薦系統：依據使用者需求推薦最適合的寵物</li>
              <li>數位化領養流程：提供線上申請、進度追蹤，簡化領養手續</li>
              <li>
                愛心社群互助：建立飼主、領養人與志工交流平台，分享飼養經驗
              </li>
              <li>透明捐款機制：公開善款流向，確保資金正確運用於動物救援</li>
              <li>愛心電商系統：購買寵物用品同時支持動物救援計畫</li>
            </ul>

            <h3 className={styles.featureTitle}>技術實現</h3>
            <ul className={styles.featureList}>
              <li>前端：採用 Next.js 14 和 React-Bootstrap 打造現代化介面</li>
              <li>後端：使用 Next.js API Routes 開發 RESTful API</li>
              <li>資料庫：MySQL 搭配 mysql2 連接器管理數據</li>
              <li>認證：JWT 技術實現安全的用戶身份驗證</li>
              <li>支付：整合綠界支付系統處理交易</li>
              <li>CI/CD：計畫導入 GitHub Actions 和 Vercel 自動化部署</li>
            </ul>

            <h3 className={styles.featureTitle}>我的貢獻</h3>
            <ul className={styles.featureList}>
              <li>負責整體 UI 組件設計與視覺風格統一</li>
              <li>開發前台完整寵物領養流程，從瀏覽到申請提交</li>
              <li>獨立設計與實現整個網站的後台管理系統</li>
              <li>設計與實現多層級權限驗證機制</li>
            </ul>
          </div>
        </div>

        <div className={styles.technicalDetails}>
          <h3 className={styles.detailTitle}>技術棧</h3>
          <div className={styles.techBadges}>
            {projects[0].tech.map((tech, index) => (
              <span key={index} className={styles.techBadgeLarge}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.projectActions}>
            <Link
              href={projects[0].codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              查看原始碼
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.futureProjects}>
        <h2 className={styles.futureTitle}>未來計劃</h2>
        <div className={styles.futureContent}>
          <p>我正在計劃擴展「毛孩之家」專案，並開發更多與寵物相關的應用：</p>
          <ul className={styles.futurePlansList}>
            <li>整合 AI 技術，提升寵物匹配推薦系統</li>
            <li>開發手機app版本，提高可及性</li>
            <li>建立寵物飼養資源中心，提供專業知識</li>
            <li>設計寵物健康追蹤功能，協助飼主照顧寵物</li>
          </ul>
        </div>
      </section>

      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>對我的項目感興趣？</h2>
        <p className={styles.contactDesc}>
          如果您有任何問題或想討論合作機會，歡迎與我聯繫
        </p>
        <Link href="/resume" className={styles.contactBtn}>
          聯絡我
        </Link>
      </section>
    </div>
  )
}
