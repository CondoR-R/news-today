export type CategoryT =
  'all' |
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science' |
  'sports' |
  'technology';

export type HomeStateT = {
  activeCategory: CategoryT;
};

export type HomeActionT = {
  type: 'setActiveCategory';
  payload: CategoryT;
}