import { CreditCardOutlined, DownOutlined, HistoryOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Dropdown, Layout } from "antd";
import Link from "next/link";

const { Header } = Layout;


export default function HeaderWebsite() {
    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        borderBottom: '1px solid #bdbdbd',
        zIndex: 1
    };
    const items = [
        {
            key: '0',
            label: <>
                <Link href={'/'} >
                    <div className="text-center"> 
                        <Avatar size={'large'} icon={<UserOutlined />} />
                        <div className="fw-bold" style={{fontSize: '16px'}}>YTcp planning</div>
                    </div>
                </Link>
            </>
        },
        {
            label: <Divider className="my-0" />

        },
        {
            key: '1',
            label: (
                <div>
                   Tài khoản
                </div>
            ),
            icon: <UserOutlined/>
        },
        {
            key: '2',
            label: (
                <div>
                   Lịch sử giao dịch
                </div>
            ),
            icon: <HistoryOutlined/>
        },
        {
            key: '4',
            label: (
                <div>
                   Số dư: 0
                </div>
            ),
            icon: <CreditCardOutlined/>
        },
        {
            label: <Divider className="my-0" />
        },
        {
            icon: <LogoutOutlined />,
            key: '3',
            label: (
                <Link href={'/login'} >
                    Đăng xuất
                </Link>
            ),
        },
    ];
    return <Header style={headerStyle}>
        <div className="text-end">
            <Dropdown
                trigger={['click']}
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow
            >
                <Button icon={<UserOutlined />}><span style={{ fontWeight: 'bold', paddingInline: '4px' }}>YTcp planning</span> - ID:<span style={{ color: 'green', fontWeight: 'bold', paddingLeft: '4px' }}>0402</span><DownOutlined /></Button>
            </Dropdown>

        </div>
    </Header>
}