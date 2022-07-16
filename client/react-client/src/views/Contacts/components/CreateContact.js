import { Form, Input } from "antd";
import React, { Fragment } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";

function CreateContact({ history }) {
  const intl = useIntl();
  
  const [form] = Form.useForm();
  
  return (
    <Fragment>
      
    </Fragment>
  );
}

export default WithIntlProvider(
  CreateContact, 
  locale, 
  browserLanguage()
);
