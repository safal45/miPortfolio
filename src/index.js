import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contactus from './components/contact/Contactus';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Layout>
            <Home />
             <About /> 
            <Projects />
            <Contactus/>
    </Layout>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
