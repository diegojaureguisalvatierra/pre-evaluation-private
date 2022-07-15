import React from "react";
import { 
  Row, 
  Col, 
  Button, 
  Input, 
  Select, 
  Tabs,
  Layout
} from "antd";
import { Fragment } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";
import { TableList } from "./TableList";
import SearchContactList from "./SearchContactList";

const { TabPane } = Tabs;
const { Content } = Layout;
function ContactList({ history }) {

  const intl = useIntl();

  return (
    <Fragment>
      <Row>
        <Col className="gutter-row" span={12}>
          <b>
            <h1>{intl.formatMessage({ id: "contacts.title" })}</h1>
          </b>
        </Col>
        <Col className="gutter-row" span={2}>
          <Button type="primary">{intl.formatMessage({ id: "contacts.add" })}</Button>
        </Col>
      </Row>
      <br />
      <Tabs defaultActiveKey="1" style={{
        backgroundColor: "#fff",
        padding: "10px"
      }}>
        <TabPane tab="All" key="1">
          <Row>
            <SearchContactList />
          </Row>
          <Row>
            <Col span={24}>
              <TableList ></TableList>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Fragment>
    );
}

ContactList.propTypes = {};

export default WithIntlProvider(
  ContactList, 
  locale, 
  browserLanguage()
);
