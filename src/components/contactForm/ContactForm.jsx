import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {addContact} from "../../redux/contacts/operations"
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { toast } from "react-hot-toast";
import css from "./ContactForm.module.css"

const ValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("it is required")
})

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nameId,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
    toast.success("Addition success!!!");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <label className={css.lable} htmlFor={nameId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.lable} htmlFor={numberId}>
          Number
        </label>
        <Field className={css.field} type="tel" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}