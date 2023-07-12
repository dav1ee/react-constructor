import { useState, ChangeEvent, FormEvent } from 'react';

import { useWithDispatch } from '@/hooks/useWithDispatch';
import { actions } from '@/store/constructorSlice';

export function ConstructorInput({
  id,
  value
}: {
  id: number;
  value: string;
}) {
  const [inputValue, setInputValue] = useState(value);

  const updateElementValue = useWithDispatch(actions.updateElementValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    updateElementValue({ id, value: inputValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="constructor-item__input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
