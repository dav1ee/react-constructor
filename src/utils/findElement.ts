import { Element } from '@/types';

export const findElement = (elements: Element[], id: number) => {
  return elements.find((el) => el.id === id);
};
