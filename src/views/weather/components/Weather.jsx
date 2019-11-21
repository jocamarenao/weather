import React from 'react';
import { Row, Col, Card } from 'antd';
import moment from 'moment';

function App(props) {
    const { data } = props;
    console.log('props', data);
    const content = () => {
        if (!Object.keys(data).length) return 'No Data';

        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <h1>{data.title}</h1>
                </div>
                <Row>
                    {data.consolidated_weather.map(item => {
                        return (
                            <Col
                                style={{ padding: '5px' }}
                                key={item.id}
                                span={8}
                            >
                                <Card>
                                    <Row>
                                        <Col span={8}>
                                            <p>
                                                <b>{item.applicable_date}</b>
                                            </p>
                                            <p>
                                                <b>
                                                    {moment(
                                                        item.applicable_date
                                                    ).format('dddd')}
                                                </b>
                                            </p>
                                            <p>
                                                <b>humidity: {item.humidity}</b>
                                            </p>
                                        </Col>
                                        <Col span={8}>
                                            <p>
                                                <img
                                                    width="100"
                                                    height="100"
                                                    src={`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`}
                                                    alt={
                                                        item.weather_state_abbr
                                                    }
                                                />
                                            </p>
                                        </Col>
                                        <Col span={8}>
                                            <p>
                                                <b>{item.weather_state_name}</b>
                                            </p>
                                            <p>
                                                <b>
                                                    {`${Math.floor(
                                                        item.min_temp
                                                    )}C - ${Math.floor(
                                                        item.max_temp
                                                    )}C`}
                                                </b>
                                            </p>
                                            <p>
                                                <b>
                                                    predictability:{' '}
                                                    {item.predictability}
                                                </b>
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </>
        );
    };
    return <>{content()}</>;
}

export default App;
