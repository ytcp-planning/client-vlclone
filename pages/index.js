import LayoutHomePage from "../components/Layouts/Layout";
import { useState } from 'react'
import { Card, Row, Col, List, Input, Select, Divider, Button } from 'antd';
import Head from "next/head";
import { CheckCircleFilled, DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";
import ListProductHomePage from "../components/ListProduct/ListProductHomePage";
const styleCard = {
  background: '#e6f0db',
  textDecoration: 'underline',
  cursor: 'pointer',
  width: '100%'
}
const styleTagA = {
  color: '#0665d0',
  textDecoration: 'underline',
}
const data = [
  <span key={1} style={{ fontWeight: '500' }}>{`=> Video hướng dẫn:  `}<a style={styleTagA} className="text-hover fw-bold">{`-->Xem Ngay<--`}</a></span>,
  <span key={2} style={{ fontWeight: '500' }}>{`=> Tham khảo chính sách bảo hành `}<a style={styleTagA} className="text-hover fw-bold">{`-->Tại Đây<--`}</a></span>,
  <span key={3} style={{ fontWeight: '500' }}>{`=> Nếu yêu cầu hỗ trợ và bảo hành  `}<a style={styleTagA} className="text-hover fw-bold">{` --> Tham gia nhóm hỗ trợ <--`}</a></span>,
];

export default function Home() {
  const [expand, setExpand] = useState(true)
  const handleExpand = (exp) => {
    setExpand(exp)
  }
  return <>
     <Head>
      <title>VLClone</title>
      <meta property="og:title" content="VLClone" key="title" />
    </Head>
    <Row gutter={[16, 16]} className='mb-3'>
      <Col md={12} xs={24} sm={24}>
        <Card style={styleCard}>
          <div className="text-hover"><CheckCircleFilled /> Tut Add Thẻ Không Hold và Fix Hold cho tài khoản</div>
        </Card>
      </Col>
      <Col md={12} xs={24} sm={24}>
        <Card style={styleCard}>
          <div className="text-hover"><CheckCircleFilled /> Deposit method USDT , PayPal</div>
        </Card>
      </Col>
    </Row>

    <Card title="THÔNG BÁO" className='mb-3'>
      <div style={{ borderLeft: '2px solid #82b54b', paddingLeft: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 500, margin: 0 }}>‼️ CHÚ Ý: FB đang quét khi login www.facebook.com. Khi mua acc về mọi người nên login qua <a target="_blank" href="http://mbasic.facebook.com/" style={styleTagA} className="text-hover">mbasic.facebook.com</a> hoặc <a target="_blank" style={styleTagA} className="text-hover">m.facebook.com</a> rồi sau đó mới chuyển về lại dạng www để tránh checkpoint !!!</h1>
        <List
          bordered={false}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>  {item}
            </List.Item>
          )}
        />
      </div>

    </Card>

    <Card title="Sản phẩm">
      <Card style={{height: expand ? 'auto' :'56px', overflow: 'hidden'}} title="Bộ lọc danh sách sản phẩm" className='mb-2' extra={expand ? <Button style={styleTagA} type="text" icon={<UpOutlined />} onClick={() => handleExpand(false)}>Thu gọn</Button> : <Button style={styleTagA} type="text" onClick={() => handleExpand(true)} icon={<DownOutlined />}>Mở rộng</Button>}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Input size="large" placeholder="Tên sản phẩm"></Input>
          </Col>
          <Col span={6}>
            <Select size="large" placeholder="Loại sản phẩm" className="w-100">
              <Select.Option value={1}>Bộ sản phẩm 01</Select.Option>
              <Select.Option value={2}>Bộ sản phẩm 02</Select.Option>
              <Select.Option value={3}>Bộ sản phẩm 03</Select.Option>
              <Select.Option value={4}>Bộ sản phẩm 04</Select.Option>
            </Select>
          </Col>
        </Row>
        <Divider className="my-3" />
        <div className="text-end">
          <Button size="large"  type="default" className="me-3"><SearchOutlined />Xóa bộ lọc</Button>
          <Button size="large"  type="primary"><SearchOutlined />Tìm kiếm</Button>
        </div>
      </Card>
      <Card title="Danh sách sản phẩm">
        {[1,2,3].map((e,i) => {
          return <Card key={i} style={{boxShadow: '0px 0px 4px #bdbdbd'}} title="Title nè mấy má (Bên trong tui chứa sản phẩm nhen) Quẹo lựa" className="mb-3" headStyle={{background: 'linear-gradient(135deg,#d262e3 0,#0665d0 100%)', color: '#fff'}}>
            <ListProductHomePage/>
          </Card> 
        })}
      </Card>
    </Card>
  </>
 
}