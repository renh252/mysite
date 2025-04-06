# 個人作品集網站

這是一個基於 Next.js 15 和 React 19 打造的個人作品集網站，專為部署到 Vercel 平台設計。

## 功能特點

- 🚀 使用最新的 Next.js 15 和 React 19 技術
- 💎 現代化、響應式設計，適應各種設備
- 🌙 內置深色/淺色模式支持
- ✨ 流暢的動畫和轉場效果
- 📱 移動優先設計，提供最佳用戶體驗
- 🔍 SEO 優化，提高搜索引擎可見性
- 🚄 高效能加載，快速的頁面渲染

## 頁面結構

網站主要包含以下頁面：

- **首頁**：個人簡介和核心技能展示
- **履歷頁**：詳細的工作經歷、教育背景和技能列表
- **作品集**：展示個人項目，含項目描述和技術詳情

## 技術棧

- Next.js 15
- React 19
- CSS Modules
- ESLint 9

## 開始使用

克隆此項目後，安裝依賴並啟動開發服務器：

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev
```

開發服務器將在 [http://localhost:3000](http://localhost:3000) 啟動。

## 構建與部署

此網站設計為直接部署到 Vercel 平台，只需將代碼推送到 GitHub 倉庫並連接到 Vercel 即可。

本地構建：

```bash
npm run build
npm run start
```

## 自定義

您可以輕鬆自定義網站內容：

- 在 `app/page.js` 修改首頁內容
- 在 `app/resume/page.js` 更新履歷詳情
- 在 `app/projects/page.js` 編輯專案展示內容

## 注意事項

為確保在 Vercel 上的最佳性能：

- 避免使用全局選擇器 (如 `body {}` 和 `:global {}`)
- 所有組件都使用純函數實現

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
