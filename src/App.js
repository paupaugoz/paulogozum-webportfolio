import React from 'react';
import NavBar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Dashboard from './components/body/Dashboard.js';
import { StylesProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Settings from '@material-ui/icons/Settings';




import './App.css';

function App() {
  
  return (
  	<StylesProvider injectFirst>
    <div className="App">
    <NavBar />
    <Dashboard />
    <Footer />
    <Button className="btn-fab" variant="fab" color="primary" aria-label="add"><Settings /></Button>
   
     
    </div>
    </StylesProvider>
  );
}

export default App;
