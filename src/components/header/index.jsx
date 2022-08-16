import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { useAppContext } from "../../containers/App/context";
import menu from "../../menu";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}


export default function  Header() {

  const { setPath } = useAppContext();

  const onMenuClick = ({ item }) => {
    const _path = item.props?.path;
    console.log(_path);
    setPath(_path);
  };

    return (
      
        <Layout.Header className="app-header">
    <title>Take A Ride</title>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["/Cars"]}
      items={menu}
      onClick={onMenuClick}
    />
     </Layout.Header>
    )
}