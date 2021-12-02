import "./index.less";

import React, { FC } from "react";
import { Button } from "antd";
import img1 from "src/image/template/223902-163759194291f0.jpeg";

const Main: FC = () => {
  const dragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.id);
    console.log('dragestart');
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>入口文件</h2>
      <Button id="manbut" className="comp-draggable" onDragStart={dragStart} draggable type="primary">
        Button
      </Button>
      <div
        className="comp-img comp-draggable"
        id="img1"
        onDragStart={dragStart}
        draggable
      >
        <img draggable="false" src={img1} alt="" />
        <p>数据的发沙发</p>
      </div>
    </main>
  );
};
export default Main;
