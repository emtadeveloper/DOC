/*

import { useFormik } from 'formik';
import * as React from 'react';
import * as Yup from "yup"


export default function App() {

  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
      email: ""
    },
    validationSchema: Yup.object({
      fristName: Yup.string().max(15, "Must be 15 characters or less").required("Requried "),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Requried "),
      email: Yup.string().email("Invalid email address").required("Requried "),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(formik.errors)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input id="fristName" name="fristName" type="text" placeholder='Frist Name'
          onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fristName} />
        {formik.touched.fristName && formik.errors.fristName ? <p>{formik.errors.fristName}</p> : null}
        <input id="lastName" name="lastName" type="text"
          onBlur={formik.handleBlur} placeholder='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        <input id="email" name="email" type="text"
          onBlur={formik.handleBlur} placeholder='email' onChange={formik.handleChange} value={formik.values.email} />
        {formik.touched.email && formik.errors.lastName ? <p>{formik.errors.email}</p> : null}
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}


*/