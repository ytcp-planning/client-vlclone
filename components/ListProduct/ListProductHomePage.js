import { CheckOutlined, FrownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, ConfigProvider, List, Row, Typography } from "antd";

export default function ListProductHomePage ({data1}){
    const listProd = [
        {
            id: 1,
            title: 'BM50$ Ngâm 6 Tháng',
            price: 15000,
            quantity: 1,
            feature: [
                {
                    id: 1,
                    text: 'Racing car sprays burning fuel into crowd.Racing car sprays burning fuel into crowd.'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                },
                
                {
                    id: 3,
                    text: 'Limit 25-50$'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                },
            ]
        },
        {
            id: 2,
            title: 'BM50$ Ngâm 6 Tháng',
            price: 15000,
            quantity: 0,
            feature: [
                {
                    id: 1,
                    text: 'Limit 25-50$'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                }
            ]
        },
        {
            id: 2,
            title: 'BM50$ Ngâm 6 Tháng',
            price: 15000,
            quantity: 1,
            feature: [
                {
                    id: 1,
                    text: 'Limit 25-50$'
                },
                {
                    id: 2,
                    text: ' Phù hợp nắm TKCN'
                },
                {
                    id: 3,
                    text: 'Limit 25-50$'
                }
            ]
        }
    ]
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];
    const renderBtn = (e) => {
        if(e.quantity > 0) return [<Button size="large" type="primary" icon={<ShoppingCartOutlined />} >Mua hàng</Button>]
        return [<ConfigProvider theme={{
            token: {
                colorPrimary: '#e04f1a'
            }
        }}>
            <Button type="primary" size="large"  icon={<FrownOutlined />} >Hết hàng</Button>
        </ConfigProvider>]
    }
    return <Row gutter={[16,16]}>
        {listProd.map(e => {
            return <Col xxl={4} xl={6} lg={8} md={12} sm={24} xs={24}>
                <Card className="product-card-homepage" title={e.title} headStyle={{background: 'rgb(59, 160, 233)', color: '#fff'}} actions={renderBtn(e)} bodyStyle={{height: 200, overflow: 'auto'}}>
                <div>
                    {/* {Int1} */}
                </div>
                <List
                    bordered={false}
                    dataSource={e.feature}
                    renderItem={(item) => (
                        <div>
                           <Typography.Paragraph className="mb-0" ellipsis={{tooltip:item.text,rows: 2}}><CheckOutlined />  {item.text}</Typography.Paragraph>
                        </div>
                    )}
                    />
                </Card>
            </Col>
        })} 
    </Row>
}