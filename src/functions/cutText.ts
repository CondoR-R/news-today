export const cutText = (text: string, len: number): string => {
  return text.slice(0, len) + '...';
}