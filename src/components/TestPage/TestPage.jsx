import React from "react";
import s from "./TestPage.module.css";
import { Container } from "../../styles/style";
import Divider from "@mui/material/Divider";
import { ReactHookForm } from "./ReactHookForm/ReactHookForm";
import { FormikForm } from "./FormikForm/FormikForm";

export default function TestPage(props) {
  return (
    <section className={s.test}>
      <Container>
        <Divider>React-Hook-Form + Material UI</Divider>
            <ReactHookForm {...props} />
        <Divider>Formik + Yup + Tailwind</Divider>
            <FormikForm {...props} />
      </Container>
    </section>
  );
}
