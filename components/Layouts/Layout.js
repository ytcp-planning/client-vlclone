import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout, Tag } from 'antd'
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize'
import DefaultNavigate from '../DefaultNavigate';
import HeaderWebsite from './Header';
import Link from "next/link"; 
const { Sider, Content } = Layout;


export default function LayoutHomePage({children}) {
    const [width] = useWindowSize();
    const [collapsed, setCollapsed] = useState(width < 1100 ? true : false);
    const widthRef = useRef(width);
 
    const contentStyle = {
        color: '#000',
        padding: '20px',
        paddingLeft: collapsed ? 100 : 220
    };
    const siderStyle = {
        lineHeight: '64px',
        color: '#000',
        backgroundColor: '#3ba0e9',
        position: 'fixed',
        left: 0,
        zIndex: 2,
        height: "100%",
        overflow: 'auto'
    };
    useEffect(() => {
        if (width) {
            widthRef.current = width;
            if (widthRef.current < 1100) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
        }
    }, [width]);

    const toggle = () => {
        if (widthRef.current) {
            widthRef.current = null
        }
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <Layout>
                <Sider
                    style={siderStyle}
                    collapsible
                    collapsed={
                        widthRef.current
                            ? widthRef.current < 1100
                                ? true
                                : false
                            : collapsed
                    }
                    onCollapse={toggle}
                    theme={'light'}
                    className="default-layout-sider"
                >
                    <Link href={'/'}>
                    <div className='text-center fw-bold' style={{fontSize: 20, color:'#fff'}}>
                        {collapsed ? 'VLC' : "VLClone.com"}
                    </div>
                    </Link>
                    <div className='sider-avatar text-center' style={{ background: '#fff', color: '#000' }}>
                        <Avatar onClick={() => console.log('Click avatar')} className="cursor-pointer my-2" size={'large'} style={{ width: '60px', height: '60px',lineHeight: '60px' }} icon={<UserOutlined />} />
                        {
                            !collapsed &&
                            <>
                                <div onClick={() => console.log('Click name')} style={{ lineHeight: '24px', fontWeight: 600, fontSize: '16px', color: '#054d9e' }} className="cursor-pointer mb-2" >YTcp planning -  ID: 0402</div>
                                <div style={{ lineHeight: '24px' }} > <Tag color={"blue"}>Thành viên</Tag> <Tag color='green'>Số dư: 0</Tag></div>
                            </>
                        }
                    </div>
                    <DefaultNavigate collapsed={collapsed} />
                </Sider>
                <Layout>
                    <HeaderWebsite />
                    <Content style={contentStyle}>
                        {children}
                    </Content>
                  
                </Layout>
            </Layout>
            <div className='text-center mt-2' style={{ fontSize: '12px' }}>Copyright © 2023 Powered by YTcp Planning</div>
        </div>
    )
}

