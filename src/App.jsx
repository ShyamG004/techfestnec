import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Particle from './components/Particle'

import Home from './pages/Home'
import './index.css';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import Event from './components/events/Event';
import EventPage from './components/events/EventPage';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import { Router } from 'lucide-react';
import { Layout } from './components/Layout';
import WorkshopPage from './components/events/WorkshopPage';
import UserDetails from './components/Registration/UserDetails';
import EventSelection from './components/Registration/EventSelection';
import Payment from './components/Registration/Payment';
import IdeathonPage from './components/events/IdeathonPage';
import DevelopersTeam from './components/Developers';
function App() {

  return (
   
      <BrowserRouter>
        <Layout>
       {/* <Particle />  */}
      {/* <ScrollToTop/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/associations/department/:department" element={<Event />} /> */}
          <Route path="/events/:eventType" element={<Event />} />
          <Route path="/:id" element={<EventPage />} />
          <Route path="/workshop/:title" element={<WorkshopPage />} />
          <Route path="/associations/event/:id" element={<EventPage />} />
          <Route path="/events/accommodations" element={<Accommodation/>} />
          <Route path="/events/contact" element={<Contact/>} />
          <Route path="/ideathon" element={<IdeathonPage/>} />
          <Route path="/registration/userdetail" element={<UserDetails/>} />
          <Route path="/registration/eventselection" element={<EventSelection/>} />
          <Route path="/registration/payment" element={<Payment/>} />
          <Route path="/developers" element={<DevelopersTeam/>} />
        </Routes>
        </Layout>
      </BrowserRouter>
  )
}

export default App
