import { ApiOutlined, ContainerOutlined, CreditCardOutlined, CustomerServiceOutlined, DesktopOutlined, HistoryOutlined, LockOutlined, MailOutlined, MoneyCollectOutlined, OrderedListOutlined, PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import React from "react";
import { _nav } from "./_nav";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link href={'/profile'}>Tài khoản</Link>, 'account', <UserOutlined />),
  getItem('THANH TOÁN', 'grp', null, [
  getItem(<Link href={'/recharge'}>Nạp tiền</Link>, '1', <MoneyCollectOutlined />),
  getItem(<Link href={"/history-transaction"}>Lịch sử giao dịch</Link>, '2', <CreditCardOutlined />),
  getItem(<Link href={'/history-order'}>Lịch sử mua hàng</Link>, '3', <HistoryOutlined />),
  getItem(<Link href={'/ticket-support'}>Gửi ticket hỗ trợ</Link>, '4', <ContainerOutlined />),
  getItem('Mua hàng', 'sub1', <OrderedListOutlined />, [
    getItem('Bộ sản phẩm 5', '5', <ContainerOutlined />),
    getItem('Bộ sản phẩm 6', '6', <ContainerOutlined />),
    getItem('Bộ sản phẩm 7', '7', <ContainerOutlined />),
    getItem('Bộ sản phẩm 8', '8', <ContainerOutlined />),
  ]),], 'group'),
  getItem('CÔNG CỤ', 'grp', null, [
    getItem(<Link href={"/create-xmdt"}>Tạp phôi XMDT</Link>, '10', <PieChartOutlined />),
    getItem(<Link href={'/connect-api'}>Kết nối API</Link>, '11',  <ApiOutlined />),
    getItem(<Link href={'/check-live-uid'}>Check live UID</Link>, '12', <ContainerOutlined />),
    getItem(<Link href={'/2fa-tool'}>2FA Tool</Link>, '14', <LockOutlined />),
    getItem(<Link href={'/support'}>Hỗ trợ</Link>, '15', <CustomerServiceOutlined />),
  ], 'group'),
];
const renderNav = (_nav)=>{
  return _nav.map(e => {
    return 
  })
}
const DefaultNavigate = ({ collapsed }) => {
  return (
    <Menu
      style={{minHeight: 'calc(100vh - 120px)'}}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="light"
      collapsed={collapsed}
      items={items}
      
    />
  );
};

export default DefaultNavigate;
