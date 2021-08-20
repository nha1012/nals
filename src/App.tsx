import React from 'react';
import './app/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './app/pages/home';
import Header from './app/components/header';
import Footer from './app/components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
