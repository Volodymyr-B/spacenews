import { useEffect, useState } from "react";

export const useDynamicPagination = () => {
  const [limit, setLimit] = useState(15);
  const [changeLimit, setChangeLimit] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (changeLimit) {
      setLimit((prev) => prev + 15);
    }
  }, [changeLimit]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setChangeLimit(true);
    } else {
      setChangeLimit(false);
    }
  };

  return limit;
};
