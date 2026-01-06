import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./component/ProfilePage.jsx";




function App() {

  
  return (

    

        
           <Routes>
      <Route path="/" element={<Dashboard/>} />

        
       <Route path="/profile" element={<ProfilePage />} />
    </Routes>
          
      
    
  );
}

export default App;
