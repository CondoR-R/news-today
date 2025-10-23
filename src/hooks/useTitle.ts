import {useEffect} from "react";

export const useTitle = (title: 'Home' | 'News') => {
  useEffect(() => {
    document.title = `News.today | ${title}`;
  }, [title]);
}