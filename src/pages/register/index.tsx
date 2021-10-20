import Link from '@link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NextSeo } from 'next-seo';
import * as Yup from 'yup';

import Button from '@components/Button';
import LocationInfo from '@components/LocationInfo';

import { Styling } from '@styles/register';

interface SignUpData {
 name: string;
 surname: string;
 email: string;
 university: string;
 password: string;
 repeat_password: string;
 privacy_agreement: boolean;
 notification_agreement: boolean;
}

const title = 'Cadastro';

const Register: React.FC = () => {
 const handleSubmit = (values: SignUpData): void => {
  alert(values);
 };

 const universities = ['UFCG', 'UFMG', 'UFPA', 'UFPB', 'UFPE', 'UFPI', 'UFPR'];

 const formValidation = Yup.object().shape({
  name: Yup.string().required('Por favor, insira seu nome.'),
  surname: Yup.string().required('Por favor, insira seu sobrenome.'),
  email: Yup.string().email('O e-mail inserido é inválido.').required('Por favor, insira um e-mail.'),
  university: Yup.string().required('Por favor, selecione uma universidade.'),
  password: Yup.string().required('Por favor, insira sua senha.'),
  repeat_password: Yup.string()
   .oneOf([Yup.ref('password')], 'As senhas não são iguais.')
   .required('Por favor, repita sua senha.'),
  privacy_agreement: Yup.boolean().oneOf([true], 'Você precisa concordar com os termos de privacidade.'),
  notification_agreement: Yup.boolean(),
 });

 return (
  <>
   <NextSeo title={title} noindex nofollow />
   <LocationInfo>{title}</LocationInfo>
   <Styling>
    <h1>Cadastro</h1>
    <Formik
     initialValues={{
      name: '',
      surname: '',
      email: '',
      university: '',
      password: '',
      repeat_password: '',
      privacy_agreement: false,
      notification_agreement: false,
     }}
     onSubmit={handleSubmit}
     validationSchema={formValidation}
    >
     {({ isValid }) => (
      <Form>
       <fieldset>
        <div>
         <label htmlFor="name">Nome</label>
         <Field id="name" name="name" />
         <ErrorMessage name="name" component="p" />
        </div>
        <div>
         <label htmlFor="surname">Sobrenome</label>
         <Field id="surname" name="surname" />
         <ErrorMessage className="long-error" name="surname" component="p" />
        </div>
       </fieldset>
       <fieldset>
        <div>
         <label htmlFor="email">E-mail</label>
         <Field id="email" name="email" type="email" placeholder="exemplo@gmail.com" />
         <ErrorMessage name="email" component="p" />
        </div>
        <div>
         <label htmlFor="university">Instituição/Afiliação</label>
         <Field id="university" name="university" as="select">
          <option value="" hidden selected>
           Escolha uma...
          </option>
          {universities.map(university => (
           <option key={university} value={university.toLowerCase()}>
            {university}
           </option>
          ))}
         </Field>
         <ErrorMessage className="long-error" name="university" component="p" />
        </div>
       </fieldset>
       <fieldset>
        <div>
         <label htmlFor="password">Senha</label>
         <Field id="password" name="password" type="password" />
         <ErrorMessage name="password" component="p" />
        </div>
        <div>
         <label htmlFor="repeat_password">Repetir senha</label>
         <Field id="repeat_password" name="repeat_password" type="password" />
         <ErrorMessage name="repeat_password" component="p" />
        </div>
       </fieldset>
       <fieldset>
        <div>
         <ErrorMessage name="privacy_agreement" component="p" />
         <Field id="privacy_agreement" name="privacy_agreement" type="checkbox" />
         <label htmlFor="privacy_agreement">
          Sim, eu concordo em ter meus dados coletados e armazenados de acordo com a{' '}
          <Link href="/privacy">declaração de privacidade</Link>.
         </label>
        </div>
        <div>
         <Field id="notification_agreement" name="notification_agreement" type="checkbox" />
         <label htmlFor="notification_agreement">
          Sim, eu gostaria de ser notificado de publicações e anúncios novos.
         </label>
        </div>
       </fieldset>
       <Button disabled={!isValid} type="submit">
        Cadastrar
       </Button>
      </Form>
     )}
    </Formik>
   </Styling>
  </>
 );
};

export default Register;
