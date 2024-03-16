import { useEffect } from 'react';
import { HasComment } from 'ts-graphviz';

export function useHasComment(target: HasComment, comment?: string): void {
  useEffect(() => {
    target.comment = comment;
  }, [target, comment]);
}
