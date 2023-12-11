
import './App.scss';
import AppRoutes from './Routes';
import { useEffect,React} from 'react';
import axios from 'axios';
import checkTokenExpiry from './api/handleNewToken';


function App() {
  useEffect(()=> {    
   checkTokenExpiry();
  },[])
  return (
  <>
   <AppRoutes/>
   </>
  );
}

export default App;
