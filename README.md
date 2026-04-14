# 冒險攻略站（React + Vite）

這是一個以分類瀏覽攻略的前端專案，支援：
- 首頁
- 攻略分類頁
- 文章頁
- FAQ 頁

目前專案已重構為「資料、元件、樣式分離」，方便你後續自己擴充。

## 專案結構

```text
src/
  components/      # 可重用 UI 元件（Header、Card、Footer...）
  data/            # 攻略資料（分類、文章、FAQ）
  styles/          # 樣式分層（base.css / app.css）
  types/           # TypeScript 型別
  utils/           # 工具（例如 hash 路由）
  App.tsx          # 頁面組裝與流程控制
```

## 本機啟動

```bash
npm install
npm run dev
```

## 打包建置

```bash
npm run build
```

## 你未來要新增內容，改哪裡？

### 1) 新增分類
在 `src/data/guides.ts` 的 `categories` 陣列新增一筆：

```ts
{ id: 'pvp', name: 'PVP 對戰', description: '競技場與對戰思路。' }
```

### 2) 新增攻略文章
在同一個檔案 `src/data/guides.ts` 的 `articles` 陣列新增：

```ts
{
  id: 'pvp-basic',
  categoryId: 'pvp',
  title: 'PVP 新手入門',
  summary: '先穩定上分，再追求極限配置。',
  tags: ['PVP', '入門'],
  highlights: ['先求穩定勝率', '觀察對手陣容', '保留反制位'],
  steps: ['建立一套主力隊', '學會常見對局', '每週檢查勝率'],
  tip: '不要一次改太多變數。'
}
```

如果你要做部落格式的「文字 / 圖片 / 文字 / 圖片」，可用 `content` 欄位：

```ts
{
  id: 'newbie-day1',
  categoryId: 'newbie',
  title: 'Day1 開局清單',
  summary: '10 分鐘完成初始設定，避免資源浪費。',
  tags: ['新手', '開局'],
  highlights: [],
  steps: [],
  tip: '先穩定推進主線，效率最高。',
  content: [
    { type: 'text', text: '先完成教學關卡。' },
    {
      type: 'image',
      src: `${import.meta.env.BASE_URL}uploads/newbie-step-1.jpg`,
      alt: '教學任務畫面',
      caption: '先把教學任務清完'
    },
    { type: 'text', text: '接著領取信箱獎勵。' }
  ]
}
```

### 3) 新增 FAQ
在 `src/data/guides.ts` 的 `faqList` 陣列新增：

```ts
{ q: '問題文字', a: '答案文字' }
```

## 樣式怎麼維護

目前樣式拆成兩層：
- `src/styles/base.css`：全域基礎（變數、reset、字體）
- `src/styles/app.css`：頁面與元件樣式

入口 `src/index.css` 只做匯入：

```css
@import './styles/base.css';
@import './styles/app.css';
```

建議規則：
- 設計 token（顏色、陰影、字型）放 `base.css`
- 元件 class（`.category-card`、`.hero`）放 `app.css`

## 圖片未來要怎麼嵌入（重點）

### A. 靜態圖片（最簡單、推薦）
1. 把圖片放在：`public/uploads/`
2. 在資料中填入路徑，建議用 `BASE_URL`，部署到 GitHub Pages 也穩定：

```ts
src: `${import.meta.env.BASE_URL}uploads/your-image.jpg`
```

3. 在內容區塊模式，圖片建議使用：

```ts
{
  type: 'image',
  src: `${import.meta.env.BASE_URL}uploads/your-image.jpg`,
  alt: '圖片描述',
  caption: '可選，圖片說明'
}
```

4. 文章頁會依照 `content` 順序自動渲染（文字/圖片交錯）。

### B. 使用者在網站上傳圖片（需要後端）
如果你要「使用者上傳後永久保存」，只靠前端與 `public/` 不夠，必須接儲存服務（例如 S3、Cloudinary、Supabase Storage）。

## GitHub Pages 部署

如果你用 `gh-pages`：

```bash
npm run deploy
```

並確認 GitHub `Settings > Pages`：
- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

---

如果你要，我下一步可以再幫你加「可折疊目錄（TOC）」與「圖片點擊放大」。
