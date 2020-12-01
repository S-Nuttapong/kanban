import { IconBaseProps } from "react-icons";

interface List {
  title: string;
  path: string;
  icon: IconBaseProps;
  cName: string;
}

export interface SidebarData {
  items: List[];
  mockOnToggle?: () => void;
  mockSidebar?: boolean;
}

export interface SidebarProps {
  isToggled?: boolean;
}
