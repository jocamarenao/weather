import React from 'react';
import { Layout } from 'antd';
import AppContent from './components/AppContent';

const { Header, Footer, Content } = Layout;

const AppLayout = props => {
    const { name } = props;
    return (
        <Layout style={{ height: '100vh' }}>
            <Header
                style={{
                    backgroundColor: 'tan'
                }}
            >
                <h1>Weather App</h1>
            </Header>
            <Content style={{ overflow: 'initial', margin: '6px 4px 0' }}>
                <AppContent name={name} {...props} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Created by Jonatan Camarena
            </Footer>
        </Layout>
    );
};

export default AppLayout;
