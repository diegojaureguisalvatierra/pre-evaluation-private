import { Row, Col, Select, Input, Button } from 'antd'
import { FilterOutlined, SortAscendingOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react'
import { Fragment } from 'react'
import { FormattedMessage, useIntl } from 'react-intl';

const { Search } = Input;
const { Option } = Select;

export default function SearchContactList() {
    const intl = useIntl();

    const onSearch = (value) => console.log(value);

    return (
        <Fragment>
            <Col span={8}>
                <Search placeholder={intl.formatMessage({
                    id: "contacts.search.text",
                })} allowClear onSearch={onSearch} />
            </Col>
            <Col span={3}>
                <Select 
                    placeholder="Domain" 
                    showSearch
                    style={{
                        width: "100%"
                    }}>
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                </Select>
            </Col>
            <Col span={3}>
                <Select 
                    placeholder="Status" 
                    showSearch
                    onSearch={onSearch}
                    style={{
                        width: "100%"
                    }}>
                    <Option value="enable">Enable</Option>
                    <Option value="disable">Disable</Option>
                </Select>
            </Col>
            <Col span={3}>
                <Button icon={<FilterOutlined />}
                        style={{
                            width: "100%"
                        }}>
                    <FormattedMessage id="contacts.button.filters" />
                </Button>
            </Col>
            <Col span={4}>
                <Button icon={<StarOutlined />}
                        style={{
                            width: "100%"
                        }}>
                    <FormattedMessage id="contacts.button.filters.save" />
                </Button>
            </Col>
            <Col span={3}>
                <Button icon={<SortAscendingOutlined />}
                        style={{
                            width: "100%"
                        }}>
                    <FormattedMessage id="contacts.button.sort" />
                </Button>
            </Col>
        </Fragment>
    )
}
