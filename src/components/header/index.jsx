import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}

const items = [
  getItem('Acasa', '1'),
  getItem('Masini', '2'),
  getItem('Profilul meu', '3')
];


export default function  Header() {
    return (
      
        <Layout.Header className="app-header">
    <title>Take A Ride</title>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={items}
    />
     </Layout.Header>
    )
}