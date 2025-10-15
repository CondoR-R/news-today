export type CategoryT =
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology' |
  '';

export type ArticlesT = {
  author: string | null;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  source: { id: string | null, name: string };
  url: string;
  urlToImage: string;
}

export type DataT = {
  status: 'ok',
  totalResults: number,
  articles: ArticlesT[]
} | null;

export type ErrorT = string | null;

export type IsLoadingT = boolean;

export type SearchT = string;

export type StateT = {
  activeCategory: CategoryT,
  isLoading: IsLoadingT,
  data: (DataT | undefined),
  error: ErrorT,
  search: SearchT
};


export type ActionT = {
  type: 'SET_ACTIVE_CATEGORY' | 'SET_IS_LOADING' | 'SET_ERROR' | 'SET_DATA' | 'SET_SEARCH';
  payload: CategoryT | DataT | ErrorT | IsLoadingT | SearchT | null;
}