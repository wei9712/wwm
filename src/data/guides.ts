import type { Category, FaqItem, GuideArticle } from '../types/guide';

export const categories: Category[] = [
  { id: 'weekbuild', name: '每周必買', description: '角色養成、資源分配。' },
  { id: 'build', name: '角色養成', description: '角色養成、資源分配。' },
  { id: 'explore', name: '地圖探索', description: '跑圖路線、隱藏點位、收集建議。' },
  { id: 'faq', name: '常見問題', description: '最常被問的問題集中整理。' }
];

export const articles: GuideArticle[] = [
  {
    id: 'weekly-faction',
    categoryId: 'weekbuild',
    title: '賽季商店必買清單',
    summary: '取得養成材料。',
    tags: ['強化', '養成'],
    highlights: [],
    steps: [],
    tip: '裝備養成請購買當下符合等級的箱子，嘯玉等武庫強化道具也請購買當下適合等級。',
    content: [
      {
        type: 'text',
        text: '賽季商店必買清單為紅框，黃框為選買，可買可不買不影響強度。其餘道具看個人進行購買。'
      },
      {
        type: 'carousel',
        images: [
          {
            src: `${import.meta.env.BASE_URL}uploads/賽季商店01.png`,
            alt: '戰鬥養成',
            caption: '戰鬥養成'
          },
          {
            src: `${import.meta.env.BASE_URL}uploads/賽季商店02.png`,
            alt: '裝備寶匣',
            caption: '裝備寶匣'
          },
          {
            src: `${import.meta.env.BASE_URL}uploads/賽季商店03.png`,
            alt: '金裝兌換',
            caption: '金裝兌換'
          },
          {
            src: `${import.meta.env.BASE_URL}uploads/賽季商店04.png`,
            alt: '營生養成',
            caption: '營生養成'
          }
        ]
      }
    ]
  },
  {
    id: 'weekly-core',
    categoryId: 'weekbuild',
    title: '每週必做總覽',
    summary: '所有有「每週上限」的內容優先完成。',
    tags: ['每週', '核心'],
    highlights: ['限次內容優先', '副本與商店最重要', '百業資源必拿'],
    steps: ['完成副本', '累積百業資源', '清商店與週任務'],
    tip: '任何「每週限制」內容都不能漏。'
  },
  {
    id: 'weekly-faction-build',
    categoryId: 'build',
    title: '百業活動與商店',
    summary: '穩定取得貨幣與養成材料。',
    tags: ['百業', '百業派對'],
    highlights: [],
    steps: [],
    tip: '',
    content: [
      { type: 'text', text: '須先加入百業。' },
      {
        type: 'carousel',
        images: [
          {
            src: `${import.meta.env.BASE_URL}uploads/百頁活動.png`,
            alt: '百頁活動任務',
            caption: '百頁活動任務'
          }
        ]
      },
      { type: 'text', text: '點進去完成相對應任務。' }
    ]
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
    id: 'weekly-trade',
    categoryId: 'explore',
    title: '跑商與經濟玩法',
    summary: '每週固定時間高收益玩法。',
    tags: ['跑商', '經濟'],
    highlights: ['價格波動', '低買高賣', '需觀察時間'],
    steps: ['觀察價格', '低點買入', '高點賣出'],
    tip: '固定時間操作收益最高。'
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
