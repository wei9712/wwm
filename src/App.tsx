import { useEffect, useMemo, useState } from 'react';
import { ArticleCard } from './components/ArticleCard';
import { CategoryCard } from './components/CategoryCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TipBox } from './components/TipBox';
import { articles, categories, faqList } from './data/guides';
import type { Category, GuideArticle } from './types/guide';
import { navigateTo, parseRouteFromHash } from './utils/router';
import type { AppRoute } from './utils/router';

function App() {
  const [route, setRoute] = useState<AppRoute>(() => parseRouteFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseRouteFromHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const categoryMap = useMemo(
    () =>
      categories.reduce<Record<string, Category>>((accumulator, category) => {
        accumulator[category.id] = category;
        return accumulator;
      }, {}),
    []
  );

  const groupedArticles = useMemo(
    () =>
      articles.reduce<Record<string, GuideArticle[]>>((accumulator, article) => {
        if (!accumulator[article.categoryId]) {
          accumulator[article.categoryId] = [];
        }
        accumulator[article.categoryId].push(article);
        return accumulator;
      }, {}),
    []
  );

  const selectedArticle =
    route.page === 'article' ? articles.find((article) => article.id === route.articleId) : undefined;

  const categoryArticles =
    route.page === 'category' && route.categoryId ? groupedArticles[route.categoryId] ?? [] : [];

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        {route.page === 'home' && (
          <>
            <section className="hero">
              <p className="hero-eyebrow">新手導向攻略站</p>
              <h1>冒險攻略快速入口</h1>
              <p>從新手到進階，先選分類再看文章。</p>
              <button className="hero-cta" onClick={() => navigateTo('/category/newbie')}>
                先看新手入門
              </button>
            </section>

            <section className="section">
              <div className="section-title">
                <h2>攻略分類</h2>
                <p>先選你現在最需要的主題，再往下看細節。</p>
              </div>
              <div className="category-grid">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    articleCount={groupedArticles[category.id]?.length ?? 0}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {route.page === 'category' && (
          <section className="section">
            <div className="section-title">
              <h2>{route.categoryId ? `${categoryMap[route.categoryId]?.name ?? '分類'} 攻略` : '全部分類'}</h2>
              <p>
                {route.categoryId
                  ? '這個分類底下的文章都在這裡，先挑一篇最符合你當前需求的。'
                  : '先進入分類，再看每篇攻略內容。'}
              </p>
            </div>

            {!route.categoryId && (
              <div className="category-grid">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    articleCount={groupedArticles[category.id]?.length ?? 0}
                  />
                ))}
              </div>
            )}

            {route.categoryId && categoryArticles.length > 0 && (
              <div className="article-grid">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {route.categoryId && categoryArticles.length === 0 && (
              <div className="empty-state">
                <p>這個分類目前還沒有文章。</p>
                <button onClick={() => navigateTo('/category')}>回到分類列表</button>
              </div>
            )}
          </section>
        )}

        {route.page === 'article' && selectedArticle && (
          <article className="article-template">
            <p className="article-meta">{categoryMap[selectedArticle.categoryId]?.name ?? '攻略'} / 文章內容</p>
            <h2>{selectedArticle.title}</h2>
            <p className="article-summary">{selectedArticle.summary}</p>

            {selectedArticle.content && selectedArticle.content.length > 0 ? (
              <section className="article-content">
                {selectedArticle.content.map((block, index) => {
                  if (block.type === 'text') {
                    return (
                      <p key={`text-${index}`} className="article-paragraph">
                        {block.text}
                      </p>
                    );
                  }

                  return (
                    <figure key={`image-${index}`} className="article-image-block">
                      <img src={block.src} alt={block.alt} loading="lazy" />
                      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
                    </figure>
                  );
                })}
              </section>
            ) : (
              <>
                <section>
                  <h3>重點整理</h3>
                  <ul>
                    {selectedArticle.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3>實作步驟</h3>
                  <ol>
                    {selectedArticle.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </section>
              </>
            )}

            <TipBox text={selectedArticle.tip} />
          </article>
        )}

        {route.page === 'article' && !selectedArticle && (
          <div className="empty-state">
            <p>找不到這篇文章，可能已被移除或連結錯誤。</p>
            <button onClick={() => navigateTo('/category')}>回到分類列表</button>
          </div>
        )}

        {route.page === 'faq' && (
          <section className="section">
            <div className="section-title">
              <h2>FAQ 常見問題</h2>
              <p>先看這裡，很多問題可以馬上解決。</p>
            </div>
            <div className="faq-list">
              {faqList.map((item) => (
                <article className="faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
