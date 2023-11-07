import { AboutUs } from '../mainpage/AboutUs';
import { ContactUs } from '../mainpage/ContactUs';
import { HeaderUser } from './HeaderUser';
//import { LoginPage } from './components/LoginPage';
import { MainPage } from '../mainpage/MainPage';
import { Title } from '../mainpage/Title';
import { ContactForm } from '../mainpage/ContactForm';
import { ExcursionContainer } from '../mainpage/ExcursionContainer';

export const UserMain = () => {
  return (
    <>
      <HeaderUser />
      <main className='bg-gray-200'>
      <MainPage />
      <Title />
      <ExcursionContainer/>
      <AboutUs />
      <ContactForm />
      <ContactUs className='mb-20' />
      </main>
    </>
  )
}