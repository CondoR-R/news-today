export type CategoryT =
  'top' |
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology';

export type DataT =
  { status: 'ok', totalResults: number, articles: any[] }
  | {};

export type StateT = {
  activeCategory: CategoryT,
  isLoading: boolean,
  data: (DataT | undefined),
  error: string | null,
};

export type ActionT = {
  type: 'setActiveCategory' | 'setIsLoading' | 'setError' | 'setData';
  payload: CategoryT | DataT | Error;
}