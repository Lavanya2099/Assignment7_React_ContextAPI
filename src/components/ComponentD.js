import React, { useContext } from 'react'
import LoginContext from '../context/loginContext'


function ComponentD() {

    let context = useContext(LoginContext)
    console.log('context', context);


    let logout=()=>{
     
        context.logoutUser()
        alert("logout successfully");
    }

    let sendData=()=>{
        context.getDataFromD('I am sending data from component D')
    }

    return (
        <div>   
         {context.login ? <p>{context.userName} is logged in</p>:<p>Please Login..!</p>}
            <button onClick={logout}>logout</button>
            <button onClick={sendData}>send data to component</button>
        </div>


    )
}

export default ComponentD
