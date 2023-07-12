import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { ConstructorItem } from './ConstructorItem';

export function Constructor() {
  const [selectedElement, setSelectedElement] = useState<number>(1);

  const elements = useSelector(
    (state: RootState) => state.constructorReducer.elements
  );

  const onSelectElement = (id: number) => setSelectedElement(id);

  return (
    <div className="constructor">
      {elements.length > 0 ? (
        elements.map((el) => (
          <ConstructorItem
            key={el.id}
            selectedElement={selectedElement}
            onSelectElement={onSelectElement}
            {...el}
          />
        ))
      ) : (
        <div className="constructor-empty">No elements were added</div>
      )}
    </div>
  );
}
