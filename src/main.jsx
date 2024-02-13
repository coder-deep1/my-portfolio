import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from '../src/components/Home/Home.jsx';
import { About } from '../src/components/About/About.jsx';
import { Skills } from '../src/components/Skills/Skills.jsx';
import { Projects } from '../src/components/Projects/Projects.jsx';
import { Contactus } from '../src/components/Contactus/Contactus.jsx';
import { Footer } from '../src/components/Footer/Footer.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact-us' element={<Contactus />} />


    </Route>
  )
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    />
  </React.StrictMode>,
);
