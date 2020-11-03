import { BoardProps } from "./IBoard";
import { CardProps } from "./ICard";

export type ColumnDrag = BoardProps & {
  type: "BOARD";
};

export type CardDrag = CardProps & {
  type: "CARD";
};

export type DragItem = ColumnDrag | CardDrag;
