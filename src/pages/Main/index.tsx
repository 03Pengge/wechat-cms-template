import "./index.less";

import React, { FC } from "react";
import { Button } from 'antd';

const Main:FC = ()=> {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>入口文件</h2>
      <Button type="primary">Button</Button>
    </main>
  );
}
export default Main;
