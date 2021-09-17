import Link from '@link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NextSeo } from 'next-seo';
import * as Yup from 'yup';

import Button from '@components/Button';
import LocationInfo from '@components/LocationInfo';

import { Styling } from '@styles/login';

interface LoginData {
 email: string;
 password: string;
}

const title = 'Acesso';

const Login: React.FC = () => {
 const handleSubmit = (values: LoginData): void => {
  alert(values);
 };

 const formValidation = Yup.object().shape({
  email: Yup.string().email('O e-mail inserido é inválido, tente novamente.').required('Por favor, insira um e-mail.'),
  password: Yup.string().required('Por favor, insira sua senha.'),
 });

 return (
  <>
   <NextSeo title={title} noindex nofollow />
   <LocationInfo>{title}</LocationInfo>
   <Styling>
    <h1>Acesso</h1>
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit} validationSchema={formValidation}>
     <Form>
      <fieldset>
       <label htmlFor="email">E-mail</label>
       <Field id="email" name="email" type="email" placeholder="exemplo@gmail.com" />
       <ErrorMessage name="email" component="p" />
      </fieldset>
      <fieldset>
       <label htmlFor="password">Senha</label>
       <Field id="password" name="password" type="password" />
       <ErrorMessage name="password" component="p" />
      </fieldset>
      <Link href="/forgot_password">Esqueceu a senha?</Link>
      <Button type="submit">Acesso</Button>
     </Form>
    </Formik>
    <Link href="/register">Não é um usuário? Registre-se no site</Link>
   </Styling>
  </>
 );
};

export default Login;
