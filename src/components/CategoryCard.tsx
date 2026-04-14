import { navigateTo } from '../utils/router';
import type { Category } from '../types/guide';

type Props = {
  category: Category;
  articleCount: number;
};

export function CategoryCard({ category, articleCount }: Props): JSX.Element {
  return (
    <article className="category-card">
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <div className="card-footer">
        <span>{articleCount} 篇攻略</span>
        <button onClick={() => navigateTo(`/category/${category.id}`)}>查看分類</button>
      </div>
    </article>
  );
}
