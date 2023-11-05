import { AboutUs } from './components/mainpage/AboutUs';
import { ContactUs } from './components/mainpage/ContactUs';
import { Header } from './components/header/Header';
//import { LoginPage } from './components/LoginPage';
import { MainPage } from './components/mainpage/MainPage';
import { Title } from './components/mainpage/Title';
import { ContactForm } from './components/mainpage/ContactForm';
import { ExcursionContainer } from './components/mainpage/ExcursionContainer';

function App() {
  return (
    <>
      <Header />
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

export default App
