import styles from './projects.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  // 項目數據
  const projects = [
    {
      id: 1,
      title: 'EliteShop - 電商購物平台',
      description:
        '完整的電商解決方案，包含商品管理、購物車、結帳流程、會員系統等功能。採用現代化技術架構，實現了智慧推薦、優惠券系統、商品評價等進階功能。展示了完整的電商業務邏輯與複雜狀態管理能力。',
      tech: ['Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Context API'],
      image: '/placeholder-image.png',
      year: '2024',
      demoLink: 'https://todo-list-gamma-one-14.vercel.app',
      codeLink: 'https://github.com/renh252/shop',
    },
    {
      id: 2,
      title: '毛孩之家 - 寵物認養平台 (已完成)',
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
          展示我開發的兩個完整專案：EliteShop 電商平台與毛孩之家認養平台，涵蓋電商系統與社會公益應用
        </p>
      </section>

      <div className={styles.projectDetail}>
        <h2 className={styles.sectionTitle}>EliteShop - 電商購物平台</h2>

        <div className={styles.projectSummary}>
          <div className={styles.projectImageLarge}></div>
          <div className={styles.projectDescription}>
            <p>
              「EliteShop」是一個全功能的電商購物平台，展示了現代電商系統的完整架構與功能實現。作為個人技術能力的展示專案，整合了最新的 Next.js 15 與 React 19 技術棧。
            </p>

            <h3 className={styles.featureTitle}>核心功能</h3>
            <ul className={styles.featureList}>
              <li>完整商品管理系統：分類、搜尋、篩選、商品詳情頁</li>
              <li>智慧購物車：自動同步、庫存檢查、批量操作</li>
              <li>進階會員系統：註冊登入、個人資料、訂單歷史</li>
              <li>願望清單功能：收藏喜愛商品，便於後續購買</li>
              <li>商品評價系統：五星評分、評論管理、評分統計</li>
              <li>智慧優惠券：多類型折扣、使用限制、自動套用</li>
              <li>商品推薦算法：基於分類、標籤、價格的推薦系統</li>
              <li>完整結帳流程：地址管理、訂單確認、支付整合</li>
              <li>管理員後台：商品管理、訂單管理、數據統計</li>
            </ul>

            <h3 className={styles.featureTitle}>技術架構</h3>
            <ul className={styles.featureList}>
              <li>前端：Next.js 15 App Router + React 19 + Tailwind CSS</li>
              <li>後端：Supabase (PostgreSQL + Auth + RLS)</li>
              <li>狀態管理：React Context API + 複雜狀態設計</li>
              <li>認證授權：Supabase Auth + Row Level Security</li>
              <li>資料庫設計：正規化設計 + 關聯查詢優化</li>
              <li>部署：Vercel + GitHub 自動化部署</li>
            </ul>

            <h3 className={styles.featureTitle}>技術亮點</h3>
            <ul className={styles.featureList}>
              <li>複雜狀態管理：多層 Context 設計，優化效能</li>
              <li>推薦算法實現：多策略評分系統</li>
              <li>優惠券邏輯：複雜驗證規則與折扣計算</li>
              <li>響應式設計：完美支援各種裝置尺寸</li>
              <li>錯誤處理：完整的錯誤邊界與用戶反饋</li>
              <li>效能優化：Image優化、動態載入、骨架屏</li>
            </ul>

            <h3 className={styles.featureTitle}>我的貢獻</h3>
            <ul className={styles.featureList}>
              <li>獨立完成整個專案的設計與開發</li>
              <li>實現複雜的電商業務邏輯與狀態管理</li>
              <li>設計並實現智慧推薦算法</li>
              <li>建立完整的管理員後台系統</li>
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
              href={projects[0].demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              查看線上展示
            </Link>
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

      <div className={styles.projectDetail}>
        <h2 className={styles.sectionTitle}>毛孩之家 - 寵物認養平台 (已完成專案)</h2>

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
            {projects[1].tech.map((tech, index) => (
              <span key={index} className={styles.techBadgeLarge}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.projectActions}>
            <Link
              href={projects[1].codeLink}
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
          <p>我正在計劃擴展「EliteShop」電商平台，並開發更多進階電商功能：</p>
          <ul className={styles.futurePlansList}>
            <li>整合 AI 技術，提升個人化商品推薦精準度</li>
            <li>實現多語言與多幣別支持，拓展國際市場</li>
            <li>建立 B2B 批發系統，擴展業務模式</li>
            <li>整合社群功能，建立用戶評價與分享機制</li>
            <li>開發手機 App 版本，提供無縫購物體驗</li>
            <li>建立進階數據分析儀表板，提供商業洞察</li>
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
