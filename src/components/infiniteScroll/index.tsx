import { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  loadMore: () => Promise<void>;
}

export const InfiniteScroll = ({ loadMore }: InfiniteScrollProps) => {
  const sentinela = useRef();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        await loadMore();
      }
    });

    intersectionObserver.observe(sentinela.current);

    return () => intersectionObserver.disconnect();
  }, [loadMore]);
  return <li ref={sentinela} style={{ listStyle: 'none' }} />;
};
