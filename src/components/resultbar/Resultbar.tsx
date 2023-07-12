import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { ResultHeadline } from './ResultHeadline';
import { ResultParagraph } from './ResultParagraph';
import { ResultButton } from './ResultButton';
import { ResultImage } from './ResultImage';

export function Resultbar() {
  const elements = useSelector(
    (state: RootState) => state.constructorReducer.elements
  );

  const results = useMemo(
    () =>
      elements.map((el) => {
        if (el.type === 'headline') {
          return <ResultHeadline key={el.id} value={el.value} />;
        }

        if (el.type === 'paragraph') {
          return <ResultParagraph key={el.id} value={el.value} />;
        }

        if (el.type === 'button') {
          return <ResultButton key={el.id} value={el.value} />;
        }

        if (el.type === 'image') {
          return <ResultImage key={el.id} value={el.value} />;
        }
      }),
    [elements]
  );

  return <div className="resultbar">{results}</div>;
}
