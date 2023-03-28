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
  getItem('Nạp tiền', '1', <MoneyCollectOutlined />),
  getItem('Lịch sử giao dịch', '2', <CreditCardOutlined />),
  getItem('Lịch sử mua hàng', '3', <HistoryOutlined />),
  getItem('Gửi ticket hỗ trợ', '4', <ContainerOutlined />),
  getItem('Mua hàng', 'sub1', <OrderedListOutlined />, [
    getItem('Bộ sản phẩm 5', '5', <ContainerOutlined />),
    getItem('Bộ sản phẩm 6', '6', <ContainerOutlined />),
    getItem('Bộ sản phẩm 7', '7', <ContainerOutlined />),
    getItem('Bộ sản phẩm 8', '8', <ContainerOutlined />),
  ]),], 'group'),
  getItem('CÔNG CỤ', 'grp', null, [
    getItem('Tạp phôi XMDT', '10', <PieChartOutlined />),
    getItem('Kết nối API', '11',  <ApiOutlined />),
    getItem('Check live UID', '12', <ContainerOutlined />),
    getItem('2FA Tool', '14', <LockOutlined />),
    getItem('Hỗ trợ', '15', <CustomerServiceOutlined />),
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
      style={{minHeight: '100vh'}}
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
