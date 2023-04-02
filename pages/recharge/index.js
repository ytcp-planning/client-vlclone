import { CopyOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, message, Row } from "antd";
import Head from "next/head";
import { Logo } from "../../images";

export default function Recharge() {
    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text)
        message.success('Đã sao chesp')
    }
    return <div>
        <Head>
            <title>Nạp tiền</title>
            <meta property="og:title" content="Nạp tiền" key="title" />
        </Head>
        <Card style={{ background: '#e6f0db', fontSize: '16px' }} className={'mb-2'}>
            <div>
                - Quý khách ghi đúng thông tin nạp tiền thì tài khoản sẽ được cộng tự động sau khi giao dịch thành công.<br />
                - Khuyến cáo nạp qua bank, vì nạp Momo đôi lúc giao dịch bị delay. Nạp bank thì 3s - 3p tiền lên.<br />
                - Nếu quý khách muốn nạp bằng phương thức khác, hoặc cần hỗ trợ vui lòng liên hệ Phone/Zalo : 0906******
            </div>
        </Card>
        <Card>
            <Row gutter={[16, 16]}>
                <Col sm={12} xs={24} md={12} lg={8} xxl={6} >
                    <div style={{ background: 'green', position:'relative',height: '100%', height: '100%' }}>
                        <div className="text-start px-4 pt-3" style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>
                            <div className="text-center">
                                <Avatar className="mb-2" size="large" style={{ border: '4px solid #fff', width: '60px', height: '60px' }} />
                            </div>
                            <div>Tên tài khoản: YTcp Planning</div>
                            <div>Số tài khoản: 6691999999 <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(6691999999)}></Button></div>
                            <div>Nội dung: YTcp Planning Develop <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(`YTcp Planning Develop`)}></Button></div>
                        </div>
                        <div className="p-4 pb-0" style={{ color: 'yellow', fontWeight: '600', fontSize: '15px' }}>
                            Hoặc quét mã bên dưới để tự động điền STK và Nội dung chuyển khoản
                        </div>
                        <div className="p-4">
                            <img  alt="prop" style={{ width: '100%' }} src="https://qr.ecaptcha.vn/api/generate/vcb/6691999999/NGUYEN%20NGOC%20HOANG%20LONG?memo=vlclone%209920&is_mask=0&bg=16" />
                        </div>
                        <div className="px-3" style={{ position: 'absolute', top: 10, right: 0, background: '#e4e9f3', color: '#495057', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, lineHeight: '28px' }}>
                            VIETCOMBANK
                        </div>
                    </div> 
                </Col>
                <Col sm={12} xs={24} md={12} lg={8} xxl={6} >
                    <div style={{ background: 'green', position:'relative',height: '100%', height: '100%'  }}>
                        <div className="text-start px-4 pt-3" style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>
                            <div className="text-center">
                                <Avatar src={'https://vlclone.com/public/assets/media/banks/vietcombank.png'} className="mb-2" size="large" style={{ border: '4px solid #fff', width: '60px', height: '60px' }} />
                            </div>
                            <div>Tên tài khoản: YTcp Planning</div>
                            <div>Số tài khoản: 6691999999 <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(6691999999)}></Button></div>
                            <div>Nội dung: YTcp Planning Develop <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(`YTcp Planning Develop`)}></Button></div>
                        </div>
                        <div className="p-4 pb-0" style={{ color: 'yellow', fontWeight: '600', fontSize: '15px' }}>
                            Hoặc quét mã bên dưới để tự động điền STK và Nội dung chuyển khoản
                        </div>
                        <div className="p-4">
                            <img  alt="prop" style={{ width: '100%' }} src="https://qr.ecaptcha.vn/api/generate/vcb/6691999999/NGUYEN%20NGOC%20HOANG%20LONG?memo=vlclone%209920&is_mask=0&bg=16" />
                        </div>
                        <div className="px-3" style={{ position: 'absolute', top: 10, right: 0, background: '#e4e9f3', color: '#495057', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, lineHeight: '28px' }}>
                            VIETCOMBANK
                        </div>
                    </div> 
                </Col>
                <Col sm={12} xs={24} md={12} lg={8} xxl={6} >
                    <div style={{ background: 'green' , position:'relative',height: '100%' }}>
                        <div className="text-start px-4 pt-3" style={{ color: '#fff', fontWeight: '600', fontSize: '15px' }}>
                            <div className="text-center">
                                <Avatar className="mb-2" size="large" style={{ border: '4px solid #fff', width: '60px', height: '60px' }} />
                            </div>
                            <div>Tên tài khoản: YTcp Planning</div>
                            <div>Số tài khoản: 6691999999 <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(6691999999)}></Button></div>
                            <div>Nội dung: YTcp Planning Develop <Button type="text" style={{ color: '#fff' }} icon={<CopyOutlined />} onClick={() => handleCopyText(`YTcp Planning Develop`)}></Button></div>
                        </div>
                        <div className="p-4 pb-0" style={{ color: 'yellow', fontWeight: '600', fontSize: '15px' }}>
                            Hoặc quét mã bên dưới để tự động điền STK và Nội dung chuyển khoản
                        </div>
                        <div className="m-4">
                            <img  alt="img" style={{ width: '100%' }} src={Logo.src} />
                        </div>
                        <div className="px-3" style={{ position: 'absolute', top: 10, right: 0, background: '#e4e9f3', color: '#495057', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, lineHeight: '28px' }}>
                            VIETCOMBANK
                        </div>
                    </div> 
                </Col>
            </Row>
        </Card>
    </div>
}