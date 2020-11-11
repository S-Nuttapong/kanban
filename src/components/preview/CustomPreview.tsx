import React from "react";
import { useDragLayer, XYCoord } from "react-dnd";
import { CustomDragLayerContainer } from "../preview/styles";
import { Board } from "../board/Board";
import { Card } from "../card/Card";

const getItemStyle = (currentOffSet: XYCoord | null) => {
  if (!currentOffSet) {
    return {
      display: "none",
    };
  }

  const transform = `translate(${currentOffSet.x}px, ${currentOffSet.y}px)`;

  return {
    WebkitTransform: transform,
  };
};

export const CustomPreview = () => {
  const { isDragging, item, currentOffSet } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffSet: monitor.getSourceClientOffset(),
  }));


  return isDragging ? (
    <CustomDragLayerContainer style={getItemStyle(currentOffSet)}>
      {item.type === "BOARD" ? (
        <Board
          id={item.id}
          text={item.text}
          index={item.index}
          boardPreview={true}
        />
      ) : (
        <Card
          id={item.id}
          text={item.text}
          cardPreview={true}
          index={item.index}
          boardIndex={item.boardIndex}
          tags={item.tags}
          priority={item.priority}
        />
      )}
    </CustomDragLayerContainer>
  ) : null;
};
