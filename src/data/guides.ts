import type { Category, FaqItem, GuideArticle } from '../types/guide';


export const categories: Category[] = [
  { id: 'newbie', name: '新手入門', description: '剛開始玩先看這區，快速打好基礎。' },
  { id: 'build', name: '養成與配隊', description: '角色養成、資源分配、隊伍組合。' },
  { id: 'combat', name: '戰鬥技巧', description: '關卡應對、Boss 觀念、操作細節。' },
  { id: 'explore', name: '地圖探索', description: '跑圖路線、隱藏點位、收集建議。' },
  { id: 'quest', name: '任務流程', description: '主線、每日、活動任務效率解法。' },
  { id: 'faq', name: '常見問題', description: '最常被問的問題集中整理。' }
];

export const articles: GuideArticle[] = [
  {
    id: 'weekly-core',
    categoryId: 'quest',
    title: '每週必做總覽',
    summary: '所有有「每週上限」的內容優先完成。',
    tags: ['每週', '核心'],
    highlights: ['限次內容優先', '副本與商店最重要', '百業資源必拿'],
    steps: ['完成副本', '累積百業資源', '清商店與週任務'],
    tip: '任何「每週限制」內容都不能漏。'
  },
  {
    id: 'weekly-dungeon',
    categoryId: 'combat',
    title: '每週副本（俠境 / 共伐）',
    summary: '核心裝備與材料來源。',
    tags: ['副本', '每週'],
    highlights: ['俠境必打', '群力共伐有次數', '掉落裝備'],
    steps: ['打普通俠境', '打百業俠境', '完成共伐次數'],
    tip: '副本是戰力來源，優先最高。'
  },
  {
    id: 'weekly-faction',
    categoryId: 'build',
    title: '百業 / 活躍資源',
    summary: '穩定取得貨幣與養成材料。',
    tags: ['百業', '資源'],
    highlights: ['百業寶銖有上限', '活躍必解', '長期資源來源'],
    steps: ['完成百業任務', '累積活躍值', '領取每週獎勵'],
    tip: '這是長期養成差距來源。'
  },
  {
    id: 'weekly-shop',
    categoryId: 'build',
    title: '每週商店（不肝 / 和鳴）',
    summary: '固定刷新可購買資源。',
    tags: ['商店', '資源'],
    highlights: ['每週刷新', '優先換裝備素材', '貨幣有上限'],
    steps: ['查看商店', '優先換核心素材', '補齊必要物品'],
    tip: '裝備匣與養成材料優先。'
  },
  {
    id: 'weekly-trial',
    categoryId: 'combat',
    title: '流派試煉',
    summary: '固定次數的戰力成長來源。',
    tags: ['試煉', '每週'],
    highlights: ['每週5次', '可累積', '掉落重要材料'],
    steps: ['確認剩餘次數', '集中刷完', '避免浪費'],
    tip: '可累積但不要拖太久。'
  },
  {
    id: 'weekly-trade',
    categoryId: 'explore',
    title: '跑商與經濟玩法',
    summary: '每週固定時間高收益玩法。',
    tags: ['跑商', '經濟'],
    highlights: ['價格波動', '低買高賣', '需觀察時間'],
    steps: ['觀察價格', '低點買入', '高點賣出'],
    tip: '固定時間操作收益最高。'
  },
  {
    id: 'weekly-horse',
    categoryId: 'quest',
    title: '抓馬與販售',
    summary: '每週有限次數資源來源。',
    tags: ['抓馬', '每週'],
    highlights: ['每日可抓', '每週販售上限', '換貨幣'],
    steps: ['抓高價馬', '累積數量', '週內賣出'],
    tip: '只賣高價值，避免浪費次數。'
  },
  {
    id: 'weekly-energy',
    categoryId: 'build',
    title: '體力與心力管理',
    summary: '每週資源產出核心。',
    tags: ['體力', '心力'],
    highlights: ['體力有上限', '心力影響副本', '需規劃使用'],
    steps: ['避免溢出', '優先副本使用', '剩餘做材料'],
    tip: '資源浪費=進度落後。'
  }
];

export const faqList: FaqItem[] = [
  {
    q: '每週最重要的是什麼？',
    a: '副本、百業與商店，這三個決定進度。'
  },
  {
    q: '哪些一定不能漏？',
    a: '所有有「每週次數或上限」的內容。'
  },
  {
    q: '流派試煉要每週打完嗎？',
    a: '建議打滿，屬於穩定成長來源。'
  },
  {
    q: '跑商一定要做嗎？',
    a: '時間夠再做，屬於額外收益。'
  }
];
