import "./app.less";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import loadable from "@loadable/component";
import Main from "src/pages/main";
import { ConfigProvider } from "antd";
import AppLayout from "src/components/AppLayout";

// setTimeout(() => {
//   ConfigProvider.config({
//     theme: {
//       primaryColor: "#25b864",
//     },
//   });
// }, 5000);

/**
 * 渲染子应用
 */
const App = () => {
  return (
    <ConfigProvider prefixCls="ant">
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </AppLayout>
    </ConfigProvider>
  );
  return <div id="subapp-viewport">撒大法师地方123sdf</div>;
};
export default App;
