import {useEffect} from "react";
import {useContextDispatch} from "@/hooks/useContextDispatch.ts";
import {APIKey} from "@/API/api-key.ts";
import {useContextState} from "@/hooks/useContextState.ts";

export const useFetchData = () => {
  const dispatch = useContextDispatch();
  const state = useContextState();

  useEffect(() => {
    if (dispatch === null) return;

    dispatch({type: 'setIsLoading', payload: true});

    const fetchUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      APIKey
    }&category=${
      state.activeCategory}`;

    try {
      (async () => {
        const res = await fetch(fetchUrl);

        if (!res.status) {
          dispatch({type: "setError", payload: res.statusText});
        }

        const data = await res.json();

        dispatch({type: "setData", payload: data});
      })()
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({type: "setError", payload: error.message});
      } else {
        dispatch({type: "setError", payload: "Неизвестная ошибка"});
      }
    } finally {
      dispatch({type: "setIsLoading", payload: false});
    }
  }, [state.activeCategory]);
}




