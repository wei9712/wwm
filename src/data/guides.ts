import type { Category, FaqItem, GuideArticle } from '../types/guide';

const uploadBase = `${import.meta.env.BASE_URL}uploads/`;

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
    id: 'newbie-day1',
    categoryId: 'newbie',
    title: 'Day1 開局清單',
    summary: '10 分鐘完成初始設定，避免資源浪費。',
    tags: ['新手', '開局'],
    highlights: ['先解主線到系統全開', '保留核心資源', '不要分散投資'],
    steps: ['完成教學關卡', '領取開服獎勵', '建立第一支主力隊'],
    tip: '先穩定推進主線，效率最高。',
    content: [
      {
        type: 'text',
        text: '進入遊戲後先完成所有新手教學，系統會陸續解鎖重要功能。'
      },
      {
        type: 'image',
        src: `${uploadBase}newbie-step-1.jpg`,
        alt: '新手教學任務畫面',
        caption: '先把教學任務全部清完。'
      },
      {
        type: 'text',
        text: '接著優先領取開服與信箱獎勵，補足前期抽卡與養成資源。'
      },
      {
        type: 'image',
        src: `${uploadBase}newbie-step-2.jpg`,
        alt: '信箱獎勵領取畫面',
        caption: '領獎後再規劃抽卡與養成。'
      }
    ]
  },
  {
    id: 'newbie-resource',
    categoryId: 'newbie',
    title: '前期資源優先順序',
    summary: '哪些資源先用、哪些先存，一次看懂。',
    tags: ['資源', '新手'],
    highlights: ['體力優先拿經驗', '抽卡券先規劃', '金幣別亂花'],
    steps: ['每日任務先清完', '活動商店先換核心素材', '不必要不重置'],
    tip: '維持固定節奏，避免忽快忽慢。'
  },
  {
    id: 'build-main',
    categoryId: 'build',
    title: '主力隊伍 3 套模板',
    summary: '輸出型、平衡型、生存型配隊思路。',
    tags: ['配隊', '養成'],
    highlights: ['先確保一隊完整', '定位比稀有度更重要', '循序升級'],
    steps: ['確認核心輸出', '搭配輔助與坦位', '再補功能位'],
    tip: '一隊成形後再養第二隊。'
  },
  {
    id: 'build-team',
    categoryId: 'build',
    title: '平民配隊也能通關',
    summary: '低稀有角色搭配與替代方案。',
    tags: ['配隊', '平民'],
    highlights: ['看機制不只看數值', '替代角先求穩定', '打不過先調循環'],
    steps: ['找出主 C 需求', '補足破盾/控場', '檢查技能循環'],
    tip: '用得順的隊伍比理論最強更重要。'
  },
  {
    id: 'combat-basic',
    categoryId: 'combat',
    title: '戰鬥基本功',
    summary: '走位、換人、爆發時機的核心觀念。',
    tags: ['戰鬥', '操作'],
    highlights: ['先保命再輸出', '觀察 Boss 前搖', '技能別同時空窗'],
    steps: ['熟悉每個角色節奏', '留一個保命技能', '爆發對齊增益窗'],
    tip: '穩定輸出勝過一波賭運氣。'
  },
  {
    id: 'combat-boss',
    categoryId: 'combat',
    title: 'Boss 機制速讀',
    summary: '進場 30 秒內判斷機制重點。',
    tags: ['Boss', '機制'],
    highlights: ['先看危險技能', '記住兩個關鍵窗口', '移動優先於輸出'],
    steps: ['開場觀察攻擊模式', '抓破綻時間', '安排爆發與防禦'],
    tip: '連續失誤時先降節奏，不要硬打。'
  },
  {
    id: 'explore-route',
    categoryId: 'explore',
    title: '高效率跑圖路線',
    summary: '一次拿滿常見資源與傳點。',
    tags: ['探索', '路線'],
    highlights: ['先開傳點', '路線環狀最省時間', '順手清支線'],
    steps: ['由中心往外擴散', '標記未探索區', '最後回收遺漏點'],
    tip: '每次只跑一區，專注度更高。'
  },
  {
    id: 'explore-secret',
    categoryId: 'explore',
    title: '隱藏點位整理',
    summary: '常漏的寶箱、機關與彩蛋。',
    tags: ['探索', '隱藏'],
    highlights: ['高低差位置常有驚喜', '夜晚時段事件不同', '重複互動有機會觸發'],
    steps: ['先查已完成清單', '補齊缺漏區域', '完成後再回檢'],
    tip: '探索時開著清單，避免重跑。'
  },
  {
    id: 'quest-daily',
    categoryId: 'quest',
    title: '每日 30 分鐘流程',
    summary: '忙碌玩家也能穩定成長的任務順序。',
    tags: ['每日', '效率'],
    highlights: ['先高報酬再低報酬', '固定節奏最省心', '留一點彈性'],
    steps: ['先清每日委託', '再打資源本', '最後整理背包與養成'],
    tip: '建立自己的固定循環，最不容易斷檔。'
  },
  {
    id: 'quest-mainline',
    categoryId: 'quest',
    title: '主線卡關排查',
    summary: '快速找出卡關原因並對症下藥。',
    tags: ['主線', '卡關'],
    highlights: ['先檢查等級與裝備', '再看隊伍功能是否缺位', '最後才是手法優化'],
    steps: ['確認建議戰力', '補足角色功能位', '重試並微調出招順序'],
    tip: '一次只改一個變因，最容易找到解法。'
  },
  {
    id: 'faq-lag',
    categoryId: 'faq',
    title: '卡頓怎麼辦？',
    summary: '從裝置設定到遊戲內調整的檢查順序。',
    tags: ['FAQ', '效能'],
    highlights: ['先關背景程式', '降低特效', '更新驅動或系統'],
    steps: ['重啟裝置', '調整畫質', '檢查網路與延遲'],
    tip: '穩定幀率比極高畫質更影響體驗。'
  },
  {
    id: 'faq-currency',
    categoryId: 'faq',
    title: '鑽石怎麼花最划算？',
    summary: '避免衝動消費，優先投資長期價值。',
    tags: ['FAQ', '資源'],
    highlights: ['先看保底規則', '為目標角色存量', '活動前保留預算'],
    steps: ['列出本期目標', '預留保底資源', '剩餘再做彈性投入'],
    tip: '先有計畫再抽卡，資源壓力最小。'
  }
];

export const faqList: FaqItem[] = [
  {
    q: '新手第一天最重要的是什麼？',
    a: '先把主線推到功能全開，再開始養成與配隊。'
  },
  {
    q: '一定要抽限定角嗎？',
    a: '不一定，先確認你現有隊伍缺什麼，再決定是否投入。'
  },
  {
    q: '卡關時先做什麼？',
    a: '先檢查等級、裝備、技能循環，再微調操作。'
  },
  {
    q: '每日任務沒時間全做怎麼辦？',
    a: '優先做高報酬項目，固定節奏比硬做全部更有效。'
  }
];


