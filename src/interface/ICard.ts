import { BoardProps } from "./IBoard";
import { Option } from "../interface/IAddNewItem";
export interface CardProps extends BoardProps {
  boardIndex: number;
  cardPreview?: boolean;
  tags?: Option[];
  priority?: Option;
}
