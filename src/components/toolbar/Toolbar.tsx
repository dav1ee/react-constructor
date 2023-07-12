import { ToolbarItem } from './ToolbarItem';

export function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar-list">
        <ToolbarItem type="headline" />
        <ToolbarItem type="paragraph" />
        <ToolbarItem type="button" />
        <ToolbarItem type="image" />
      </div>
    </div>
  );
}
