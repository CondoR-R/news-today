export type CategoryT =
  'top' |
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology';

export type data = any;

export type StateT = {
  activeCategory: CategoryT,
  isLoading: boolean,
  news: (data | undefined),
  error: null,
};

export type ActionT = {
  type: 'setActiveCategory';
  payload: CategoryT;
}