import { Breadcrumb,  Card, Col, Form, Input, Row} from "antd";
import Head from "next/head";
import Link from "next/link";
import CKEditorComponent from '../../../components/Editor/CkEditorComponent'

export default function TicketSupport() {
    return <div>
        <Head>
            <title>Tạo ticket hỗ trợ</title>
            <meta property="og:title" content="Ticket hỗ trợ" key="title" />
        </Head>
        <Breadcrumb  
            params={3}
            items={[
                {
                    title: <Link href={'/'} >Trang chủ</Link>,
                    key: 1,
                },
                {
                    title: <Link href={'/ticket-support'} >Ticket hỗ trợ</Link>,
                    key: 2
                },
                {
                    title: "Tạo ticket hỗ trợ",
                }
            ]}
        />
        <Card  className="mt-3" style={{maxWidth: '1246px', margin: '0 auto'}}>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col sm={24} xs={24} md={12}>
                <Form.Item label="Tên tài khoản">
                    <Input></Input>
                </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                <Form.Item label="Tên tài khoản">
                    <Input></Input>
                </Form.Item>
                    </Col>
                </Row>
                <CKEditorComponent />
            </Form>
        </Card>
    </div>
}