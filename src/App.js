import logo from './logo.svg';

import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AtomicHead from './components/AtomicHead';
import Content from './components/Content';
import AtomicOffer from './components/AtomicOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <AtomicHead/>
      <Content/>
      <AtomicOffer/>
      <Footer/>
    </div>
    
  );
  
}

export default App;
