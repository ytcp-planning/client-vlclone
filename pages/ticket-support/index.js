import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Empty, Table } from "antd";
import Head from "next/head";
import Link from "next/link";

export default function TicketSupport() {
    return <div>
        <Head>
            <title>Ticket hỗ trợ</title>
            <meta property="og:title" content="Ticket hỗ trợ" key="title" />
        </Head>
        <Card
            title="Ticket hỗ trợ" 
            className="mb-3"
            headStyle={{ background: 'linear-gradient(135deg,#d262e3 0,#0665d0 100%)', color: '#fff' }}
        >

            <div className="mb-2 text-end">
               <Link href={'ticket-support/create'}>
               <Button type="primary"><PlusOutlined /> Tạo Ticket mới</Button>
               </Link>
            </div>

            <Table locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Không có thông tin" /> }} dataSource={[]} columns={[{ title: 'ID' }, { title: 'Tiêu đề' }, { title: 'Mức độ ưu tiên' }, { title: 'Trạng thái' }, { title: 'Ngày tạo' }, { title: 'Ngày cập nhật gần nhất' }]}>

            </Table>
        </Card>
    </div>
}