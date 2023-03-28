import { Layout } from "antd";

const { Footer } = Layout

export default function FooterWebsite() {
    return <Footer style={footerStyle}>
        <FooterWebsite />
    </Footer>
}