import { Card, Empty, Table } from "antd";
import Head from "next/head";

export default function HistoryOrder() {
    return <div>
        <Head>
            <title>Lịch sử mua hàng</title>
            <meta property="og:title" content="Lịch sử mua hàng" key="title" />
        </Head>

        <Card
            title="Lịch sử mua hàng"
            headStyle={{ background: 'linear-gradient(135deg,#d262e3 0,#0665d0 100%)', color: '#fff' }}
        >
            <Table locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có thông tin" /> }} dataSource={[]} columns={[{ title: 'Mã đơn' }, { title: 'Thời gian' }, { title: 'Thể loại' }, { title: 'Số lượng' }, { title: 'Tổng tiền' }, { title: 'Trạng thái' }]}>

            </Table>
        </Card>
    </div>
}