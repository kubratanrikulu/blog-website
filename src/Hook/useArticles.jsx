import { useEffect, useState } from "react";

/**
 * @typedef {Object} MediumArticleProps
 * @property {string} author
 * @property {string[]} categories
 * @property {string} content
 * @property {string} description
 * @property {string} link
 * @property {string} pubDate
 * @property {string} thumbnail
 * @property {string} title
 * @property {string} guid
 */

export default function useArticles(guid) {
  const [data, setData] = useState(
    /** @type {undefined | MediumArticleProps | MediumArticleProps[]?} */ ([])
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ktanrikuluu`;
        const response = await fetch(url);
        const json = await response.json();
        if (!guid) {
          setData(json.items);
        } else {
          const founded = json.items.find((v) => v.guid.includes(guid));
          console.log("founded", founded);
          setData(founded);
        }
      } catch (e) {
        setData([]);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, [guid]);

  return {
    data,
    error,
    isLoading
  };
}
