import styles from './resume.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>個人履歷</h1>
        <p className={styles.description}>
          前端開發工程師，專注於設計與開發高品質的React與Next.js解決方案
        </p>
      </section>

      <div className={styles.resumeContent}>
        <aside className={styles.sidebar}>
          <div className={styles.profile}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatar}></div>
            </div>
            <h2 className={styles.name}>黃仁豪</h2>
            <p className={styles.position}>前端開發工程師</p>
          </div>

          <div className={styles.contactInfo}>
            <h3 className={styles.sidebarTitle}>聯絡資訊</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span className={styles.contactText}>renh0408@google.com</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>💻</span>
                <span className={styles.contactText}>
                  <a
                    href="https://github.com/renh252"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/renh252
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.skills}>
            <h3 className={styles.sidebarTitle}>技術技能</h3>
            <div className={styles.skillList}>
              <div className={styles.skill}>
                <span className={styles.skillName}>React.js</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>Next.js</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>JavaScript</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>Node.js</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>Tailwind CSS</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>Supabase</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div className={styles.skill}>
                <span className={styles.skillName}>PostgreSQL</span>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.languages}>
            <h3 className={styles.sidebarTitle}>語言能力</h3>
            <ul className={styles.languageList}>
              <li className={styles.languageItem}>
                <span className={styles.languageName}>英文</span>
                <span className={styles.languageLevel}>流利</span>
              </li>
            </ul>
          </div>

          <div className={styles.download}>
            <h3 className={styles.sidebarTitle}>相關連結</h3>
            <div className={styles.downloadLinks}>
              {/* 這裡放履歷相關檔案 */}
            </div>
          </div>
        </aside>

        <main className={styles.main}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              職業目標
            </h2>
            <p className={styles.summary}>
              尋求前端開發人員職位，以利用我在React、Next.js和響應式設計方面的技能來建立良好的使用者體驗。擁有製程工程背景，能將系統性分析與問題解決方法論應用於前端開發過程，確保程式碼品質與效能優化。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              工作經歷
            </h2>

            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.jobTitle}>設備與製程工程師</h3>
                      <span className={styles.timelineDate}>
                        2022年3月 - 2024年9月
                      </span>
                    </div>
                    <div className={styles.companyName}>群創光電</div>
                    <ul className={styles.responsibilities}>
                      <li>與部門團隊密切協作，確保產線機台平穩運作</li>
                      <li>分析生產數據，識別並解決技術問題</li>
                      <li>開發並優化標準作業流程，確保生產穩定性</li>
                      <li>
                        成就：在職期間無重大生產異常事件發生，提升產線效能5%
                      </li>
                      <li>
                        可轉移技能：跨功能團隊協作、系統性問題分析與解決、流程優化思維、對技術細節的高度關注
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              教育背景
            </h2>

            <div className={styles.education}>
              <div className={styles.educationItem}>
                <div className={styles.degree}>前端工程師養成班</div>
                <div className={styles.school}>資展國際</div>
                <div className={styles.educationDate}>
                  2024年11月 - 2025年4月
                </div>
                <p className={styles.educationDesc}>
                  完成毛孩之家網站專案，學習全端開發技術
                </p>
              </div>

              <div className={styles.educationItem}>
                <div className={styles.degree}>物理學士</div>
                <div className={styles.school}>國立彰化師範大學</div>
                <div className={styles.educationDate}>
                  2018年9月 - 2022年6月
                </div>
                <p className={styles.educationDesc}>
                  完成近代物理概論專題，培養邏輯思維和系統性分析能力
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              技術堆疊
            </h2>

            <div className={styles.techStackSection}>
              <div className={styles.techCategory}>
                <h3 className={styles.techCategoryTitle}>前端</h3>
                <ul className={styles.techList}>
                  <li>HTML, CSS, JavaScript (ES6) - 熟練</li>
                  <li>React.js, Next.js 15 - 專精</li>
                  <li>Bootstrap, Tailwind CSS - 熟練</li>
                  <li>RWD, UI/UX, API串接 - 熟練</li>
                </ul>
              </div>

              <div className={styles.techCategory}>
                <h3 className={styles.techCategoryTitle}>後端 & 資料庫</h3>
                <ul className={styles.techList}>
                  <li>Node.js, Express - 熟練</li>
                  <li>Supabase, PostgreSQL - 熟練</li>
                  <li>API 設計與整合 - 熟練</li>
                  <li>JWT 授權驗證 - 熟練</li>
                  <li>MySQL, 資料庫設計 - 熟練</li>
                  <li>Row Level Security (RLS) - 熟練</li>
                </ul>
              </div>

              <div className={styles.techCategory}>
                <h3 className={styles.techCategoryTitle}>開發工具</h3>
                <ul className={styles.techList}>
                  <li>Git 版本控制與團隊協作 - 熟練</li>
                  <li>js-cookie - 熟練</li>
                  <li>WebSocket 即時通訊 - 基礎</li>
                  <li>MCP 串接 LLM - 基礎</li>
                  <li>Docker - 基礎</li>
                  <li>GCP - 基礎</li>
                </ul>
              </div>

              <div className={styles.techCategory}>
                <h3 className={styles.techCategoryTitle}>軟實力</h3>
                <ul className={styles.techList}>
                  <li>適應力與快速學習能力</li>
                  <li>專案與時間管理</li>
                  <li>團隊協作與溝通能力</li>
                  <li>問題分析與解決思維</li>
                  <li>技術文件閱讀能力</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📝</span>
              自傳
            </h2>

            <div className={styles.autobiography}>
              <p className={styles.paragraph}>
                我是黃仁豪，2022年從國立彰化師範大學物理系畢業。大學期間，除了鑽研物理學科知識外，我對程式設計產生了濃厚興趣，自學了基礎的Python用來模擬電子學實驗數據，並在課餘時間閱讀了計算機概論等相關書籍。
              </p>
              <p className={styles.paragraph}>
                畢業後，我進入群創擔任設備與製程工程師，在這個角色中，我負責設備維護和改善製程參數以提高良率。這段工作經驗培養了我的數據分析能力、問題解決思維和團隊協作精神。我在職期間成功將生產良率提高5%，獲得部門主管的肯定。
              </p>
              <p className={styles.paragraph}>
                然而，我始終對程式開發保持熱情。在群創工作的兩年間，我持續利用下班時間自學前端技術，並開始構思未來的職涯規劃。我發現自己對前端開發的熱情遠超過現有工作，所以在2024年初，因應公司的人力結構調整，我做出了轉職的決定。
              </p>
              <p className={styles.paragraph}>
                為了系統性地學習前端開發技術，我參加了資展國際的前端工程師養成班。在培訓期間，我專注學習React.js、Next.js等現代前端框架，並透過「毛孩之家」這個實戰專案，整合了前後端技術、設計、開發各種功能，完整體驗了一個網站的建立過程。
              </p>
              <p className={styles.paragraph}>
                在完成毛孩之家專案後，我進一步挑戰自己，開發了 EliteShop 電商平台。這個專案讓我深入學習了 Supabase、PostgreSQL 等現代後端服務，並實現了更複雜的商業邏輯，包括智慧推薦系統、多層級優惠券機制、以及完整的電商工作流程。透過這個專案，我不僅提升了技術能力，也增強了對電商業務邏輯的理解，展現了獨立開發複雜系統的能力。
              </p>
              <p className={styles.paragraph}>
                我相信我的物理背景與工程師經驗賦予了我獨特的邏輯思維和系統性思考能力，加上對前端技術的熱情和持續學習的態度，使我能夠成為一位優秀的網頁開發者。我期待能加入貴公司，將我的技術能力與團隊協作精神投入到貴公司的專案中，共同創造卓越的使用者體驗和商業價值。
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
