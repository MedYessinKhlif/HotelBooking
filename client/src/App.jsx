import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Rooms from './components/Rooms/Rooms'
import BookingForm from './components/BookingForm/BookingForm'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
    <main>
      <Hero />
      <Rooms />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  )
}
