// src/App.js
import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


import './App.css'



const {  Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: 0 }}/>
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '24px' }} className="site-layout">   
          <Content style={{ background: '#fff', padding: '24px', margin: 0, minHeight: 280 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.385737373603!2d78.37283444999998!3d17.50290945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1690455993311!5m2!1sen!2sin" 
          title='map' width="100%" height="100%"  
          allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};


export default App;