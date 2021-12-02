import "./index.less";

import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { dom } from "src/utils";
import lodash from "lodash";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };

  componentDidMount(){
    document.querySelector('.comp-draggable').addEventListener('mouseover',(e)=>{
      console.log(e);
    },false)
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  onmouseenter = (e)=>{
    console.log('onmouseenter',e.target);

  }
  onmouseleave=(e)=>{
    console.log('onmouseleave',e.target);

  }
  dragOver = (e) => {
    e.preventDefault();
    // const parentDom = dom.getParentContainClass(e.target,'comp-draggable');
    // console.log({parentDom});
  };
  ondrop = (e) => {
    // 新增
    const id = e.dataTransfer.getData("Text");
    const dragDom = document.getElementById(id);
    const parentDom = dom.getParentContainClass(e.target, "comp-draggable");
    // 移动位置
    if (parentDom) {
      document
        .querySelector(".preview-content")
        .insertBefore(dragDom, parentDom);
      return;
    }

    const node: any = dragDom.cloneNode(true);
    const timeStamp = new Date().getTime();
    node.setAttribute("id", timeStamp);
    node.setAttribute("draggable", true);
    node.ondragstart = (e) => {
      e.dataTransfer.setData("Text", e.target.id);
    };
    console.log('node',node)
    node.onmouseenter = this.onmouseenter;
    node.onmouseleave = this.onmouseleave;
    node.classList.add("edit");
    e.target.appendChild(node);
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, height: "100vh" }}
            >
              <div className="site-left">
                <div className="components-content">{this.props.children}</div>
              </div>
              <div className="site-right">
                <div
                  className="preview-content"
                  onDragOver={this.dragOver}
                  onDrop={this.ondrop}
                ></div>
              </div>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}
