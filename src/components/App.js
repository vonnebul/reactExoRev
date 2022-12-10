import { Link, Route, Routes } from 'react-router-dom';
import '../style/App.css';
import AffichageBoucle from './AffichageBoucle';
import Condition from './Condition';
import Evenement from './Evenement';
import PageParent from './PageParent';
import TestJSX from './TestJSX';

function App() {
  return (
    <div className="App">
      <p>hello world</p>
      <Link to="/">jsx</Link>
      <Link to="/condition">condition</Link>
      <Link to="/boucle">boucle</Link>
      <Link to="/props">props</Link>
      <Link to="/evenement">evenement</Link>

      <Routes>
        <Route path="/" element={<TestJSX/>}/>
        <Route path="/condition" element={<Condition/>}/>
        <Route path="/boucle" element={<AffichageBoucle/>}/> 
        <Route path="/props" element={<PageParent/>}/>  
        <Route path="/evenement" element={<Evenement/>}/>                    
      </Routes>
    </div>
  );
}

export default App;
