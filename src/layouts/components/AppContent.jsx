import React from 'react';
import { PageHeader, Card } from 'antd';
import styles from './index.module.css';

const Routes = props => {
    const { children, name } = props;

    return (
        <>
            <div className={styles.pageHeaderColor}>
                <PageHeader
                    style={{ background: '#1890FF', margin: 10 }}
                    title={name}
                />
            </div>
            <Card style={{ background: '#fff', minHeight: 360, margin: 10 }}>
                {children}
            </Card>
        </>
    );
};

export default Routes;
