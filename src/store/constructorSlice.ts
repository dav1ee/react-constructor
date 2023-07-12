import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { generateId } from '@/utils/generateId';
import { findElement } from '@/utils/findElement';
import { ConstructorSliceType, ElementType } from '@/types';

const initialState: ConstructorSliceType = {
  elements: []
};

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addNewElement: (state, action: PayloadAction<ElementType>) => {
      if (action.payload === 'headline') {
        state.elements.push({
          id: generateId(),
          type: 'headline',
          value: 'Headline'
        });
      }

      if (action.payload === 'paragraph') {
        state.elements.push({
          id: generateId(),
          type: 'paragraph',
          value: 'Paragraph'
        });
      }

      if (action.payload === 'button') {
        state.elements.push({
          id: generateId(),
          type: 'button',
          value: 'Button'
        });
      }

      if (action.payload === 'image') {
        state.elements.push({
          id: generateId(),
          type: 'image',
          value:
            'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1'
        });
      }
    },

    updateElementValue: (
      state,
      action: PayloadAction<{ id: number; value: string }>
    ) => {
      const element = findElement(state.elements, action.payload.id);

      if (!element) return;

      element.value = action.payload.value;
    },

    removeElement: (state, action: PayloadAction<{ id: number }>) => {
      const filtered = state.elements.filter(
        (el) => el.id !== action.payload.id
      );
      state.elements = filtered;
    },

    moveElementUp: (state, action: PayloadAction<{ id: number }>) => {
      const element = findElement(state.elements, action.payload.id);

      if (!element) return;

      const currentPos = state.elements.indexOf(element);
      const nextPos = currentPos - 1;

      if (nextPos < 0) return;

      state.elements.splice(currentPos, 1);
      state.elements.splice(nextPos, 0, element);
    },

    moveElementDown: (state, action: PayloadAction<{ id: number }>) => {
      const element = findElement(state.elements, action.payload.id);

      if (!element) return;

      const currentPos = state.elements.indexOf(element);
      const nextPos = currentPos + 1;

      state.elements.splice(currentPos, 1);
      state.elements.splice(nextPos, 0, element);
    }
  }
});

export const { reducer: constructorReducer, actions } = constructorSlice;
