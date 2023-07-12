type ConstructorSliceType = {
  elements: Element[];
};

type Element = {
  id: number;
  type: ElementType;
  value: string;
};

type ElementType = 'headline' | 'paragraph' | 'button' | 'image';

export type { ConstructorSliceType, Element, ElementType };
