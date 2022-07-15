import { Row, Col, Select, Input } from 'antd'
import React from 'react'
import { Fragment } from 'react'

const { Search } = Input;
const { Option } = Select;

export default function SearchContactList() {

    const onSearch = (value) => console.log(value);
    return (
        <Fragment>
            <Col span={10}>
                <Search placeholder="input search text" allowClear onSearch={onSearch} />
            </Col>
            <Col span={4}>
                <Select defaultValue="Sign Up" style={{ width: '30%' }}>
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
            </Col>
            <Col span={4}>
                s
            </Col>
            <Col span={4}>
                asdsad
            </Col>
            <Col span={4}>
                asdasd
            </Col>
        </Fragment>
    )
}
