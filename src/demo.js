import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  CarOutlined,
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Acasa', '1', <PieChartOutlined />),
  getItem('Masini', 'sub1', <CarOutlined />, [
    getItem('Volkswagen', '3'),
    getItem('BMW', '4'),
    getItem('Mercedes', '5'),
    getItem('Audi', '6'),
    getItem('Opel', '7'),
    getItem('Toyota','8'),
    getItem('Honda','9'),
    getItem('Dacia','10'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '11'), getItem('Team 2', '12')]),
  getItem('Files', '13', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Masini</Breadcrumb.Item>
            <Breadcrumb.Item>Volkswagen</Breadcrumb.Item>
          </Breadcrumb>
          <Card
            cover=
              {
                <img 
                  src={require('./img/passat.png')}
                  alt="passat" 
                 />
              }
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
            width: 300,
                    }}
            >
      <p>Combustibil: Diesel</p>
      <p>Culoare: Gri</p>
      <p>Consum mediu: 5 l/100km</p>
    </Card>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;