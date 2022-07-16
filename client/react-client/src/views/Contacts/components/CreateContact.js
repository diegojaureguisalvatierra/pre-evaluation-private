import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import browserLanguage from "../../../helpers/browserLanguage";
import WithIntlProvider from "../../../hoc/WithIntlProvider";
import locale from "./locale.json";

function CreateContact({ history }) {
  const intl = useIntl();
  
  return (
    <h1>
      <FormattedMessage id="contacts.create.title" />
    </h1>
  );
}

export default WithIntlProvider(
  CreateContact, 
  locale, 
  browserLanguage()
);
