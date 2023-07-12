import { useWithDispatch } from '@/hooks/useWithDispatch';
import { actions } from '@/store/constructorSlice';
import { ElementType } from '@/types';
import {
  HeadlineIcon,
  ParagraphIcon,
  ButtonIcon,
  ImageIcon
} from '@/components/icons';

export function ToolbarItem({ type }: { type: ElementType }) {
  const addNewElement = useWithDispatch(actions.addNewElement);

  const onAddNewElement = () => addNewElement(type);

  const renderIcon = () => {
    if (type === 'headline') return <HeadlineIcon />;
    if (type === 'paragraph') return <ParagraphIcon />;
    if (type === 'button') return <ButtonIcon />;
    if (type === 'image') return <ImageIcon />;
  };

  return (
    <div className="toolbar-item" onClick={onAddNewElement}>
      {renderIcon()}
      <div className="toolbar-item__label">{type}</div>
    </div>
  );
}
