import React from "react";
import {  Card, Cascader, Breadcrumb, Col, Row, Pagination  } from "antd";
import {locations, cars } from "../Cars/options";
import { TeamOutlined, CalendarOutlined,SettingOutlined, BgColorsOutlined, FireOutlined} from '@ant-design/icons';
import { useAppContext } from "../App/context";
import onChange from "react";

export default function Cars() {
  const { setPath } = useAppContext();

  const onRowClick = (row) => {
    const path = `/cars/${row.key}`;
    console.log(path);
    setPath(path);
  };

  return(

<div>
  

<Breadcrumb
    style={{
      padding: "0 100px"
    }}
    >

    <Breadcrumb.Item>Acasa</Breadcrumb.Item>
    <Breadcrumb.Item>Masini</Breadcrumb.Item>
    <Breadcrumb.Item>Volkswagen</Breadcrumb.Item>
    <Breadcrumb.Item>Passat</Breadcrumb.Item>
    </Breadcrumb>
      <Cascader size="large" options={cars} onChange={onChange} />
      <Cascader size="large" options={locations} onChange={onChange} />
    
      <br/>
      <br/>
      <Row gutter={[16, 24]} justify="space-evenly">
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Card
            cover={<img src={require("../../assets/img/passat.png")} alt="passat" />}
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
            <p><TeamOutlined/> Locuri: 5</p>
          </Card>
        </Col>
      </Row>
      <Pagination align={'center'} defaultCurrent={1} total={50} />
    </div>
  );
          }