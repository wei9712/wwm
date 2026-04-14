import { navigateTo } from '../utils/router';
import type { GuideArticle } from '../types/guide';

type Props = {
  article: GuideArticle;
};

export function ArticleCard({ article }: Props): JSX.Element {
  return (
    <article className="article-card">
      <h4>{article.title}</h4>
      <p>{article.summary}</p>
      <div className="tag-list">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button onClick={() => navigateTo(`/article/${article.id}`)}>閱讀全文</button>
    </article>
  );
}
