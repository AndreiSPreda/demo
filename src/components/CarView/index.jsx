import React from 'react';
import { Card, Col, Row, Pagination } from "antd";
import { TeamOutlined, CalendarOutlined, SettingOutlined, BgColorsOutlined, FireOutlined } from '@ant-design/icons';

export default function CarView({ cars }) {
  return (<div className='posts'> <Row gutter={[16, 24]} justify="space-evenly">
    {cars.map(post => {
      return (
        <div className='Cards'>
          <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={4}>
            <Card
              cover={<img src={post.img} alt="img" />}
              title={`${post.marca} ${post.model}`}
              extra={<a href="#">Detalii</a>}
              style={{
                width: 250
              }}
            >
              <p><FireOutlined /> {post.combustibil}</p>
              <p><BgColorsOutlined /> {post.culoare}</p>
              <p><SettingOutlined /> {post.transmisie}</p>
              <p><CalendarOutlined /> {post.an}</p>
              <p><TeamOutlined /> {post.locuri}</p>
            </Card>
          </Col>

        </div>
      )
    })
    }
  </Row>
    <Pagination align={'center'} defaultCurrent={1} total={50} />
  </div>
  )
}

