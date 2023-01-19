import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import qrcode from "../qrcode.png";

const ImageDragable = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [canvasWidth, setCanvasWidth] = useState(595.32);
  const [canvasHeight, setCanvasHeight] = useState(841.92);
  const [position, setPosition] = useState({
    x: canvasWidth - x - width,
    y: canvasHeight - y - height,
  });

  const handleResize = (e, direction, ref) => {
    setWidth(ref.offsetWidth);
    setHeight(ref.offsetHeight);
  };

  const handleStop = (e, data) => {
    setX(data.x);
    setY(canvasHeight - data.y);
    setPosition({ x: data.x, y: data.y });
  };

  // lly = y
  // ury = y-width

  // llx = x-50
  // urx = llx+height
  console.log(
    `llx:${x - 50}, lly:${y}, ury:${y - width}, urx:${x - 50 + height}`
  );

  return (
    <div
      style={{
        border: "1px solid red",
        borderStyle: "dotted",
        width: "695px",
        height: "943px",
      }}
    >
      <Draggable onStop={handleStop} bounds="parent" position={position}>
        <Resizable
          onResize={handleResize}
          defaultSize={{
            width: width,
            height: height,
          }}
          style={{
            background: `url(${qrcode})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          lockAspectRatio={true}
        ></Resizable>
      </Draggable>
    </div>
  );
};

export default ImageDragable;
