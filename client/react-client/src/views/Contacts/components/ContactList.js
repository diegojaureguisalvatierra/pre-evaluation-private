import React, { Fragment, useState, useRef } from "react";
import { 
  Row, 
  Col, 
  Button, 
  Tabs,
  Modal,
  Typography,
  Form,
  Input
} from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";
import { TableList } from "./TableList";
import SearchContactList from "./SearchContactList";
import CreateContact from "./CreateContact";
import { v4 as uuidv4} from 'uuid'

const { TabPane } = Tabs;
const { Title } = Typography;
function ContactList({ history }) {

  const intl = useIntl();
  const [form] = Form.useForm();

  const contactRef = useRef();
  const contactMailRef = useRef();

  const [isCreating, setisCreating] = useState(false);
  const [contacts, setContacts] = useState([
    {key:1, userId:1, name:'Jhon', email: 'hola@gmail.com'},
    {key:2, userId:2, name:'a', email: 'f@gmail.com'},
    {key:3, userId:3, name:'s', email: 'r@gmail.com'},
    {key:4, userId:4, name:'d', email: 'y@gmail.com'}
  ]);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleShowModal = (record) => {
    setisCreating(true);
  };

  const handleCancelModal = () => {
    setisCreating(false);
  };

  const handelOkModal = () => {
    const contact = contactRef.current.input.value;
    const contactMail = contactMailRef.current.input.value;

    if(contact === '' || (contactMail === '' && isValidEmail(contactMail))) return;

    setContacts((prevContacts) => {
      return [...prevContacts, 
        {key:uuidv4(), userId:5, name:contact, email: contactMail}
      ]
    });

    contactRef.current.value = null;
    contactMailRef.current.value = null;

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
              <TableList dataContacts={contacts}></TableList>
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
          >
            <Form.Item 
              name="name" 
              label="Nombre" 
              rules={[{ required: true }]}
              >
              <Input ref={contactRef}/>
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
              <Input ref={contactMailRef}/>
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
