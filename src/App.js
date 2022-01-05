
import './App.css';
import {useState} from 'react';
import ComponentD from './components/ComponentD';
import { LoginProvider } from './context/loginContext';


function App() {


  let getDataFromD=(data)=>{
  console.log(data);
}
const logoutUser=()=>{
    setloginData({
      ...loginData,
      login:false
    })
  }

  const [loginData,setloginData] = useState({

    login: true,
    userName:'Lavanya',
   
    logoutUser:logoutUser,
    getDataFromD:getDataFromD
  })




  return (
    <div className="App">
     <LoginProvider value={loginData}>
        <ComponentD />
   
      </LoginProvider>

    </div>
  );
}

export default App;
