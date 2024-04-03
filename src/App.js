import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Signup from './Signup';
import { useAuth0 } from "@auth0/auth0-react";
import VegStarters from './VegStarters';
import NonVegStarters from './NonVegStarters';
import Soups from './Soups';
import Maincourse from './Maincourse';


function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  return (
    
    <Router>
     
    <Routes>
      
      {!isAuthenticated && (<Route path="/" element={<Signup/>} />)}
      {isAuthenticated && ( <Route path="/" element={<Main/>} />)}
      
      <Route path="/VegStarters" element={<VegStarters/>}/>
      <Route path="/NonVegStarters" element={<NonVegStarters/>}/>
      <Route path="/Soups" element={<Soups/>}/>
      <Route path="/Maincourse" element={<Maincourse/>}/>
      
      

    </Routes>
  </Router>
  
     
    
    
   
  );
}

export default App;
