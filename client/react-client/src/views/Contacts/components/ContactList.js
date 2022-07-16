import React, { Fragment, useState } from "react";
import { 
  Row, 
  Col, 
  Button, 
  Tabs,
  Modal,
  Typography,
  Input,
  Form
} from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";
import { TableList } from "./TableList";
import SearchContactList from "./SearchContactList";

const { TabPane } = Tabs;
const { Title } = Typography;
function ContactList({ history }) {

  const intl = useIntl();
  const [form] = Form.useForm();

  const [isCreating, setisCreating] = useState(false);
  const [creatingContact, setCreatingContact] = useState(null);

  const handleShowModal = (record) => {
    setisCreating(true);
  };

  const handleCancelModal = () => {
    setisCreating(false);
  };

  const handelOkModal = () => {
    form.validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });

    setisCreating(false);
  };

  return (
    <Fragment>
      <Row>
        <Col className="gutter-row" span={12}>
          <b>
            <Title level={3}>
              <FormattedMessage id="contacts.title" />  
            </Title>
          </b>
        </Col>
        <Col className="gutter-row" span={2}>
          <Button type="primary"
                  justify="flex-end"
                  onClick={handleShowModal}>
            <FormattedMessage id="contacts.add" />
          </Button>
        </Col>
      </Row>
      <br />
      <Tabs defaultActiveKey="1" style={{
        backgroundColor: "#fff",
        padding: "10px"
      }}>
        <TabPane tab={intl.formatMessage({
                    id: "contacts.tab.text",
                })} key="1">
          <Row>
            <SearchContactList />
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <TableList ></TableList>
            </Col>
          </Row>
        </TabPane>
      </Tabs>

      <Modal
        title="Creando Contacto"
        visible={isCreating}
        onCancel={handleCancelModal}
        onOk={handelOkModal}
        okText="Guardar">
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
          >
            <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
      </Modal>
    </Fragment>
    );
}

ContactList.propTypes = {};

export default WithIntlProvider(
  ContactList, 
  locale, 
  browserLanguage()
);
