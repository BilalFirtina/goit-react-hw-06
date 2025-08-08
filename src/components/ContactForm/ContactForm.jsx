import { Field, Formik, Form, ErrorMessage } from "formik";
import style from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ handleSubmit }) => {
  const nameId = nanoid();
  const numberId = nanoid();
  const initialValues = { name: "", number: "" };
  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required, please enter your name!"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required, please enter your number!"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={feedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={style.error} name="name" component="span" />
        <label htmlFor={numberId}>Number</label>
        <Field type="tel" name="number" id={numberId} />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
