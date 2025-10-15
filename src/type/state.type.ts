export type CategoryT =
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology';

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

export type StateT = {
  activeCategory: CategoryT,
  isLoading: IsLoadingT,
  data: (DataT | undefined),
  error: ErrorT,
};


export type ActionT = {
  type: 'setActiveCategory' | 'setIsLoading' | 'setError' | 'setData';
  payload: CategoryT | DataT | ErrorT | IsLoadingT | null;
}