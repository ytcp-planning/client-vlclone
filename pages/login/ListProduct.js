import { Card, Col, Row, Typography } from "antd";



export default function ListProduct() {
    const listProduct = [
        {
            id: 1,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 100
        },
        {
            id: 2,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 100
        },
        {
            id: 3,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 100
        },
        {
            id: 4,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 100
        },
        {
            id: 5,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 0
        },
        {
            id: 6,
            title: "BM50$ Ngâm 6 Tháng",
            price: 15000,
            content: 'Limit 25-50$|Phù hợp nắm TKCN',
            quantity: 100
        }
    ]
    return <Card title="Danh sách BM đang bán tại VLclone.com" className="mb-4" style={{boxShadow: '0px 0px 2px #bdbdbd'}} headStyle={{background: 'rgba(5,77,158,.7)', color: '#fff', textAlign: 'center'}}>
        <Row gutter={[16, 16]} >
            {listProduct.map(e => {
                return <Col key={e.id} xl={6} sm={12} md={8} xs={24}>
                    <Card style={{height: '120px'}}>
                        <div className="d-flex justify-content-around">
                            <div className="text-center me-3" style={{ minWidth: '60px', height: '60px', borderRadius: '50%', background: '#f0f3f8', lineHeight: '60px', }}>{e.quantity > 0 ? e.quantity : <span style={{ fontSize: '9px', fontWeight: 500, color: '#e04f1a' }}>SOLD OUT</span>}</div>
                            <div> 
                            <div><b>{e.title}</b></div>
                            <Typography.Text>{e.content}</Typography.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            })}

        </Row>
    </Card>
}