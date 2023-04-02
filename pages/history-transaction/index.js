import { Card, Empty, Table } from "antd";
import Head from "next/head";

export default function Login() {
    return (
        <div>
            <Head>
                <title>Lịch sử giao dịch</title>
                <meta property="og:title" content="Lịch sử giao dịch" key="title" />
            </Head>
            <Card
                title="Lịch sử giao dịch"
                headStyle={{ background: 'linear-gradient(135deg,#d262e3 0,#0665d0 100%)', color: '#fff' }}
            >
                <Table locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có thông tin" /> }} dataSource={[]} columns={[{ title: 'Ngày giao dịch' }, { title: 'Mã giao dịch' }, { title: 'Số tiền' }, { title: 'Nội dung' }]}>

                </Table>
            </Card>
        </div>
    )
}
