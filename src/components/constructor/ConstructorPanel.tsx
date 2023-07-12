import { useWithDispatch } from '@/hooks/useWithDispatch';
import { actions } from '@/store/constructorSlice';
import { ArrowUpIcon, ArrowDownIcon, TrashIcon } from '@/components/icons';

export function ConstructorPanel({ id }: { id: number }) {
  const removeElement = useWithDispatch(actions.removeElement);
  const moveElementUp = useWithDispatch(actions.moveElementUp);
  const moveElementDown = useWithDispatch(actions.moveElementDown);

  const onRemoveElement = () => removeElement({ id });
  const onMoveElementUp = () => moveElementUp({ id });
  const onMoveElementDown = () => moveElementDown({ id });

  return (
    <div className="constructor-panel">
      <ArrowUpIcon onClick={onMoveElementUp} />
      <ArrowDownIcon onClick={onMoveElementDown} />
      <TrashIcon onClick={onRemoveElement} />
    </div>
  );
}
