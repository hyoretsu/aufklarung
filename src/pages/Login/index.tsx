import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DefaultTemplate from '../../components/DefaultTemplate';
import LocationInfo from '../../components/LocationInfo';

import { Styling } from './styles';

const Login: React.FC = () => {
 const handleSubmit = useCallback(values => {
  alert(values);
 }, []);

 const formValidation = Yup.object().shape({
  email: Yup.string().email('Por favor, insira um e-mail válido').required('Por favor, insira um e-mail'),
  password: Yup.string().required('Por favor, insira sua senha'),
 });

 return (
  <DefaultTemplate>
   <LocationInfo />
   <Styling>
    <Formik initialValues={{ email: '', password: '' }} validationSchema={formValidation} onSubmit={handleSubmit}>
     <Form noValidate>
      <fieldset>
       <label htmlFor="email">E-mail</label>
       <Field name="email" type="email" placeholder="exemplo@gmail.com" />
       <ErrorMessage name="email" component="p" />
      </fieldset>
      <fieldset>
       <label htmlFor="password">Senha</label>
       <Field name="password" type="password" />
       <ErrorMessage name="password" component="p" />
      </fieldset>
      <Link to="/register">Esqueceu a senha?</Link>
      <button type="submit">Acesso</button>
     </Form>
    </Formik>
    <Link to="/register">Não é um usuário? Registre-se no site</Link>
   </Styling>
  </DefaultTemplate>
 );
};

export default Login;
