export type AppRoute =
  | { page: 'home' }
  | { page: 'category'; categoryId?: string }
  | { page: 'article'; articleId: string }
  | { page: 'faq' };

export function parseRouteFromHash(hash: string): AppRoute {
  const clean = hash.replace(/^#/, '').replace(/\/+$/, '');

  if (clean.startsWith('/category/')) {
    return { page: 'category', categoryId: clean.split('/')[2] };
  }
  if (clean === '/category') {
    return { page: 'category' };
  }
  if (clean.startsWith('/article/')) {
    return { page: 'article', articleId: clean.split('/')[2] ?? '' };
  }
  if (clean === '/faq') {
    return { page: 'faq' };
  }

  return { page: 'home' };
}

export function navigateTo(path: string): void {
  window.location.hash = path;
}
