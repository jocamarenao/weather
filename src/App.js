import React from 'react';
import AppLayout from './layouts/AppLayout';
import Weather from './views/weather/container';
import 'antd/dist/antd.css';

function App() {
    return (
        <AppLayout name="Weather Forecast">
            <Weather />
        </AppLayout>
    );
}

export default App;
