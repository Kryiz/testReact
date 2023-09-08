import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikForm = (props) => {
  const MySchema = Yup.object().shape({
    formikName: Yup.string()
      .required("Обязательное поле")
      .min(2, "Минимум 2 буквы")
      .max(20, "Максимум 20 символов"),
    formikText: Yup.string()
      .required("Обязательное поле")
      .min(2, "Минимум 2 буквы")
      .max(20, "Максимум 20 символов"),
  });
  const formik = useFormik({
    initialValues: {
      formikName: "",
      formikText: "",
    },
    validationSchema: MySchema,
    onSubmit: (values, { resetForm }) => {
      props.addFormikFieldToState(values);
      resetForm();
    },
  });
  const FormikResult = () => {
    return props.formikMessage ? (
      <div className="pb-2">
        <span className="pr-4">{`Имя : ${props.formikMessage?.formikName}`}</span>
        <span className="pr-4">{`Текст : ${props.formikMessage?.formikText}`}</span>
      </div>
    ) : (
      "Результат из State"
    );
  };
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-3 gap-4 pt-8 pb-5"
      >
        <div>
          <div>
            <input
              type={"text"}
              placeholder="Имя"
              name="formikName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.formikName}
              className="border-solid border border-gray-300 rounded hover:border-gray-600 mb-0"
            />
          </div>
          <div className="text-red-600 text-sm text-center">
            {formik.errors.formikName ? formik.errors.formikName : ""}
          </div>
        </div>
        <div>
          <div>
            <input
              type={"text"}
              placeholder="Текст"
              name="formikText"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.formikText}
              className="border-solid border border-gray-300 rounded hover:border-gray-600 mb-0"
            />
          </div>
          <div className="text-red-600 text-sm text-center">
            {formik.errors.formikText ? formik.errors.formikText : ""}
          </div>
        </div>
        <div>
          <button
            type={"submit"}
            className="bg-sky-600 text-white w-full py-2 rounded drop-shadow-md transition-all hover:drop-shadow-lg hover:bg-sky-700"
          >
            Отправить
          </button>
        </div>
      </form>
      <FormikResult />
    </>
  );
};
