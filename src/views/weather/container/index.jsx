import React, { useEffect, useState } from 'react';
import { Spin, Select } from 'antd';
import { api } from '../../../config/Axios';
import { GET_WEATHER_BY_LOCATION } from '../../../endpoints';
import Weather from '../components/Weather';

const { Option } = Select;

function Container() {
    const [location, setLocation] = useState('2367105');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(
                    GET_WEATHER_BY_LOCATION.endpoint(location)
                );
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.log('err', err);
                setLoading(false);
            }
        }
        fetchData();
    }, [location]);

    function handleChange(value) {
        setLocation(value);
    }

    const content = () => {
        return (
            <div>
                <Select
                    defaultValue="2367105"
                    style={{ width: 200 }}
                    onChange={handleChange}
                >
                    <Option value="2367105">Boston</Option>
                    <Option value="44418">London</Option>
                    <Option value="2487956">San Francisco</Option>
                </Select>
                <Weather data={data} />
            </div>
        );
    };

    return <>{!loading ? content() : <Spin size="large" />}</>;
}

export default Container;
