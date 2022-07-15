import React from "react";
import { Row, Col, Spin, Button } from "antd";
import { Fragment } from "react";
import { useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";
import { TableList } from "./TableList";

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
      <br></br>
      <Row>
        <Col span={24}>
          <TableList ></TableList>
        </Col>
      </Row>
    </Fragment>
    );
}

ContactList.propTypes = {};

export default WithIntlProvider(
  ContactList, 
  locale, 
  browserLanguage()
);
