import React from "react";
import "antd/dist/antd.css";
import "./content.css";
import { Card } from "antd";
import { Breadcrumb} from "antd";
import { Col, Row } from "antd";
import { Pagination } from 'antd';
import { Cascader } from 'antd';
import { TeamOutlined, CalendarOutlined,SettingOutlined, BgColorsOutlined, FireOutlined} from '@ant-design/icons';


const App = () => 
(

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
        <Breadcrumb.Item>Passat</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
      <Cascader size="large" options={optionslocation} onChange={onChange} />
      <Cascader size="large" options={optionsbrand} onChange={onChange} />
    
      <br/>
      <br/>
      <Row gutter={[16, 24]} justify="space-evenly">
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("./assets/img/passat.png")} alt="passat" />}
            title="Volkswagen Passat"
            extra={<a href="#">Detalii</a>}
            style={{
              width: 250
            }}
          >
            <p><FireOutlined /> Combustibil: Diesel</p>
            <p><BgColorsOutlined /> Culoare: Gri</p>
            <p><SettingOutlined /> Cutie de viteze: Manuala</p>
            <p><CalendarOutlined /> An: 2016</p>
            <p>< TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
      </Row>
      <Pagination align={'center'} defaultCurrent={1} total={50} />
    </Content>
);
export default App;