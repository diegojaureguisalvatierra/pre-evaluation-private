import React, { useCallback, useRef } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, Redirect } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

function LoginForm({ history, homePath }) {
  const intl = useIntl();
  const onFinish = useCallback([history, homePath]);

  const userRef = useRef();
  const passwordRef = useRef();

  const user = "admin";
  const password = "admin";

  const onSubmit = () => {
    const user = userRef.current.input.value;
    const password = passwordRef.current.input.value;
    
    if(user === '' || password === '') return;

    if(user !== 'admin' && password !== 'admin'){
      notification.open({
        message: 'Incorrecto',
        description:
          'Usuario o contraseña incorrectos',
      });
    }else
      return window.location.href = "http://localhost:3000/contacts/all";
  };

  return (
    <Form
      name="normal_login"
      className="container-form"
      initialValues={{ rememberMe: true }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: "authentication.form.email.required-message",
            }),
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          ref={userRef}
          placeholder={intl.formatMessage({
            id: "authentication.form.email.placehorder",
          })}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: "authentication.form.password.required-message",
            }),
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          ref={passwordRef}
          placeholder={intl.formatMessage({
            id: "authentication.form.password.placehorder",
          })}
        />
      </Form.Item>
      <Form.Item name="rememberMe" valuePropName="checked">
        <Checkbox style={{ color: "#989eb5", width: "100%" }}>
          <FormattedMessage id="authentication.form.check.label" />
          <Link style={{ float: "right" }} to="/forgotpassword">
            <FormattedMessage id="authentication.form.link.forgot-label" />
          </Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button style={{ width: "100%" }} 
                type="primary" /* htmlType="submit" */
                onClick={onSubmit}>
          <FormattedMessage id="authentication.form.button.label" />
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
