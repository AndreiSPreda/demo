import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Card } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Pagination } from 'antd';
import { Cascader } from 'antd';

const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const optionslocation = [
  {
    value: 'Romania',
    label: 'Romania',
    children: [
      {
        value: 'Brasov',
        label: 'Brasov',
        
      },
      {
        value: 'Bucuresti',
        label: 'Bucuresti',
        
      },
      {
        value: 'Timisoara',
        label: 'Timisoara',
        
      },
      {
        value: 'Cluj',
        label: 'Cluj',
        
      },
    ],
  },
  
];
const optionsbrand = [
  {
    value: 'Dacia',
    label: 'Dacia',
    children: [
      {
        value: 'Logan',
        label: 'Logan',
        
      },
      {
        value: 'Sandero',
        label: 'Sandero',
        
      },
      {
        value: 'Duster',
        label: 'Duster',
        
      },
      {
        value: 'Spring',
        label: 'Spring',
        
      },
    ],
  },
  {
    value: 'Volkswagen',
    label: 'Volkswagen',
    children: [
      {
        value: 'Passat',
        label: 'Passat',
        
      },
      {
        value: 'Golf',
        label: 'Golf',
        
      },
      {
        value: 'eUp',
        label: 'eUp',
        
      },
      {
        value: 'Polo',
        label: 'Polo',
        
      },
    ],
  },
  {
    value: 'BMW',
    label: 'BMW',
    children: [
      {
        value: '1 series',
        label: '1 series',
        
      },
      {
        value: '3 series',
        label: '3 series',
        
      },
      {
        value: '5 series',
        label: '5 series',
        
      },
      {
        value: '7 series',
        label: '7 series',
        
      },
    ],
  },
  {
    value: 'Audi',
    label: 'Audi',
    children: [
      {
        value: 'A3',
        label: 'A3',
        
      },
      {
        value: 'A4',
        label: 'A4',
        
      },
      {
        value: 'A6',
        label: 'A6',
        
      },
      {
        value: 'A8',
        label: 'A8',
        
      },
    ],
  },
  
];
const onChange = (value) => {
  console.log(value);
};
const items = [
  getItem('Acasa', '1'),
  getItem('Masini', '2'),
  getItem('Profilul meu', '3')
];
const App = () => 
(
  <Layout className="layout">
    <Header>
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
      />
    </Header>
    <Content
      style={{
        padding: "0 50px"
      }}
    >

      
      <Breadcrumb
        style={{
          margin: "16px 0"
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Masini</Breadcrumb.Item>
        <Breadcrumb.Item>Volkswagen</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
      <Cascader size="large" options={optionslocation} onChange={onChange} />
      <Cascader size="large" options={optionsbrand} onChange={onChange} />
    
      <br/>
      <br/>
      <Row gutter={[16, 24]} justify="space-evenly">
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p>Combustibil: Diesel</p>
            <p>Culoare: Gri</p>
            <p>Consum mediu: 5 l/100km</p>
          </Card>
        </Col>
      </Row>
      <Pagination align={'center'} defaultCurrent={1} total={500} />
    </Content>
    
    <Footer
      style={{
        textAlign: "center"
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
); 
    

export default App;
