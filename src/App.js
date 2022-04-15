
import LoginForm from './components/LoginForm'
import RegistroCarro from './components/RegistroCarro';
import RegistroUsuario from './components/RegistroUsuario';
import RegistroTaller from './components/RegistroTaller';
import TallerList  from './components/TallerList';

import { useEffect } from 'react';
import { useUsers } from './hooks';
import CarroList from './components/CarroList';


function App() {


  return (
<>
<CarroList/>

</>
    
  )
  
}

export default App;
