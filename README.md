# 冒險攻略站（React + Vite）

以「分類 -> 文章 -> FAQ」為主的靜態前端網站。

## 專案結構

```text
src/
  components/      # Header、Card、Footer 等 UI 元件
  data/            # 攻略資料（分類、文章、FAQ）
  styles/          # 樣式（base.css / app.css）
  types/           # 型別定義
  utils/           # 工具（hash 路由）
  App.tsx          # 頁面流程與組裝
public/
  uploads/         # 手動放置文章圖片
```

## 本機開發

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

## 內容維護

### 1) 新增分類
檔案：`src/data/guides.ts` -> `categories`

```ts
{ id: 'pvp', name: 'PVP 對戰', description: '競技場與對戰思路。' }
```

### 2) 新增文章
檔案：`src/data/guides.ts` -> `articles`

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

### 3) 文章圖文交錯（Blog 形式）
文章可用 `content` 欄位，依陣列順序輸出文字與圖片。

```ts
{
  id: 'newbie-day1',
  categoryId: 'newbie',
  title: 'Day1 開局清單',
  summary: '10 分鐘完成初始設定。',
  tags: ['新手', '開局'],
  highlights: [],
  steps: [],
  tip: '先穩定推進主線。',
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

### 4) 新增 FAQ
檔案：`src/data/guides.ts` -> `faqList`

```ts
{ q: '問題文字', a: '答案文字' }
```

## 圖片放置規則

1. 圖片放在 `public/uploads/`
2. 文章圖片路徑使用：

```ts
src: `${import.meta.env.BASE_URL}uploads/檔名.jpg`
```

3. 檔名建議小寫英數與 `-`，例如：`weekly-core-01.jpg`

## 樣式維護

- `src/styles/base.css`：全域變數、reset、字型
- `src/styles/app.css`：頁面與元件樣式
- `src/index.css`：僅匯入樣式

## GitHub Pages 部署

### 一次性設定

```bash
git config --global --add safe.directory D:/Vscode/MMW
git remote add origin https://github.com/<帳號>/<repo>.git
```

若已存在遠端：

```bash
git remote set-url origin https://github.com/<帳號>/<repo>.git
```

### 每次部署

```bash
npm run build
npm run deploy
```

`deploy` 會把 `dist/` 發佈到 `gh-pages` 分支。

### GitHub 頁面設定

`Settings > Pages`
- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

### 常見問題

- `gh-pages 不是內部或外部命令`：執行 `npm install`
- `Failed to get remote.origin.url`：未設定 `origin`
- `dubious ownership`：先執行
  `git config --global --add safe.directory D:/Vscode/MMW`
