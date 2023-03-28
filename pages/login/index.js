import { DoubleRightOutlined, LoginOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Checkbox, ConfigProvider, FloatButton, Form, Input } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import ListProduct from "./ListProduct";

export default function Login() {
    const router = useRouter()
    const handleLogin = ()=>{
        router.push('/')
    }
    
    return (
        <div>
            <Head>
            <title>Login</title>
            <meta property="og:title" content="VLClone" key="title" />
            </Head>
            <div style={{ background: 'rgba(5,77,158,.8)', minHeight: '100vh', position: 'relative' }} className="pt-4 px-2 pb-4">
                <Card className="w-100 " style={{ maxWidth: '500px', margin: '0 auto', borderRadius: 0 }}>
                    <div className="text-center"> 
                        <Avatar src={"https://vlclone.com/public/logo_vlclone.png"} style={{ width: 150, height: 150 }}></Avatar>
                        <h1 className="text-logo mb-0">VLclone.com</h1>
                        <span className="text-uppercase fw-bold" style={{ color: '#6c757d' }}>Đăng nhập</span>
                    </div>
                    <Form onFinish={handleLogin} layout="vertical" className="mt-3" style={{ maxWidth: 350, margin: '0 auto' }} autoComplete="off">
                        <Form.Item label="Tài khoản" name={"username"} rules={[{ required: true, whitespace: true, message: 'Vui lòng nhập tên tài khoản' }]}>
                            <Input placeholder="Tài khoản" size="large"></Input>
                        </Form.Item>
                        <Form.Item
                            label="Mật khẩu"
                            name={"password"} 
                            rules={[
                                {
                                    required: true,
                                    whitespace: true,
                                    message: 'Vui lòng nhập mật khẩu!',
                                }
                            ]}>
                            <Input.Password placeholder="Mật khẩu" size="large" ></Input.Password>
                        </Form.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <Form.Item className="mb-0">
                                <Checkbox >Ghi nhớ</Checkbox>
                            </Form.Item>
                            <a className="text-decoration-underline" style={{color: '#5858ff'}}>Quên mật khẩu?</a>
                        </div>
                        <Form.Item className="text-center">
                            <Button size="large" className="text-uppercase" icon={<LoginOutlined />} htmlType="submit" type="primary">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                    <div>Chưa có tài khoản? <span>Đăng ký</span></div>
                </Card>  <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#e04f1a'
                    }
                }}>
                    <div className="text-center" style={{ position: 'absolute', bottom: '100px', left: 0, right: 0 }}>
                
                    </div>

                    <div className="text-center mt-3 button-login-to-list-product">
                        <a href="#list-product"><Button size="large" type="primary">Click để xem hàng</Button></a>
                        <DoubleRightOutlined className="d-block mt-2"  style={{transform: 'rotate(90deg)', color: 'white'}}/>
                    </div>
                </ConfigProvider>
            </div>

            <div id="list-product" className="mt-4 " style={{ paddingInline: '40px' }}>
                <ListProduct />
                <ListProduct />
                <ListProduct />
                <ListProduct />
            </div>
            <FloatButton.BackTop duration={200} href="#" />
        </div>
    )
}
