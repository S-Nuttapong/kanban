import { useAppStateHookProps } from "./IAppStateReducer";
export interface BoardProps extends useAppStateHookProps {
  id: string;
  text: string;
  index: number;
  isPreview?: boolean;
}
