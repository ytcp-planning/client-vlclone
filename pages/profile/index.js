import {  SettingOutlined } from "@ant-design/icons";
import {  Card, Descriptions, Empty, Table } from "antd";
import Head from "next/head";

export default function Profile() {
    return <>
    <Head>
            <title>Tài khoản</title>
            <meta property="og:title" content="Tài khoản" key="title" />
        </Head>
        <Card
            title="Thông tin tài khoản"
            extra={<SettingOutlined style={{ color: '#fff', cursor: 'pointer' }} />}
            headStyle={{ background: 'linear-gradient(135deg,#d262e3 0,#0665d0 100%)', color: '#fff' }}
        >
            <Descriptions
                //  bordered
                column={1}>
                <Descriptions.Item label={"Ngày đăng ký:"}>{`27/03/2023`}</Descriptions.Item>
                <Descriptions.Item label={"Tài khoản:"}>{`YTcp planning`}</Descriptions.Item>
                <Descriptions.Item label={"Email:"}>{`email@gmail.com`}</Descriptions.Item>
                <Descriptions.Item label={"Số dư:"}>{`0 VNĐ`}</Descriptions.Item>
                <Descriptions.Item label={"2FA - Xác thực đăng nhập:"}>{`Chưa kích hoạt`}</Descriptions.Item>
            </Descriptions>
        </Card>
        <Card title={'Danh sách đăng nhập'} className='mt-3'>
               <Table locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có thông tin" /> }} dataSource={[]} columns={[{ title: 'ID' }, { title: 'ID' }, { title: 'IP Address' }, { title: 'Last Logged At' }, { title: 'Status' }]}>

            </Table>
        </Card>

    </>
}