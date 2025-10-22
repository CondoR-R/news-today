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

export type PageT = number;

export type StateT = {
  activeCategory: CategoryT,
  isLoading: IsLoadingT,
  data: (DataT | undefined),
  error: ErrorT,
  search: SearchT,
  page: number,
};

type setActiveCategory = { type: 'SET_ACTIVE_CATEGORY', payload: CategoryT };
type setIsLoading = { type: 'SET_IS_LOADING', payload: boolean };
type setError = { type: 'SET_ERROR', payload: ErrorT };
type setData = { type: 'SET_DATA', payload: DataT };
type setSearch = { type: 'SET_SEARCH', payload: SearchT };
type setPage = { type: 'SET_PAGE', payload: PageT };

export type ActionT =
  setActiveCategory
  | setIsLoading
  | setError
  | setData
  | setSearch
  | setPage;

