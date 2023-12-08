import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().email('Некорректный адрес электронной почты').required('Обязательное поле'),
  password: yup.string().matches(/^(?=.*[A-Z])(?=.*[#$%^&*]).{1,}$/, 'Некорректный пароль').required('Обязательное поле'),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
      navigate('/description');
    },
  });

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Страница авторизации</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
