import {
  HeadlineIcon,
  ParagraphIcon,
  ButtonIcon,
  ImageIcon
} from '@/components/icons';
import { ConstructorPanel } from './ConstructorPanel';
import { ConstructorInput } from './ConstructorInput';
import { Element } from '@/types';

type ConstructorItemProps = {
  selectedElement: number;
  onSelectElement: (id: number) => void;
};

export function ConstructorItem(props: Element & ConstructorItemProps) {
  const { selectedElement, onSelectElement, id, type, value } = props;

  const className = `constructor-item ${
    selectedElement === id ? 'selected' : ''
  }`;

  const renderIcon = () => {
    if (type === 'headline') return <HeadlineIcon />;
    if (type === 'paragraph') return <ParagraphIcon />;
    if (type === 'button') return <ButtonIcon />;
    if (type === 'image') return <ImageIcon />;
  };

  const renderPanel = () => {
    if (selectedElement === id) {
      return <ConstructorPanel id={id} />;
    }
  };

  const renderInput = () => {
    if (selectedElement === id) {
      return <ConstructorInput id={id} value={value} />;
    }
  };

  return (
    <div className={className} onClick={() => onSelectElement(id)}>
      {renderPanel()}
      {renderIcon()}
      <div className="constructor-item__label">{type}</div>
      {renderInput()}
    </div>
  );
}
