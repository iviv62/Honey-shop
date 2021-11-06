import Login from "../components/userForms/Login"
import {useState, useEffect} from 'react'
const login = () => {

    const [whoami, setWhoami] = useState({});
    const [error, setError] = useState('');
  //TODO MAKE WHOAMI IN AN ENTRY POINT
  // AND SAVE IT  IN STORE
    useEffect(() => {
      
      fetch("http://localhost:8000/api/whoami/", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
      .then(response => response.json())
      .then((data) => {
          setWhoami(data.user)
      })
      .catch((err) => {
        console.log(err);
        setError("You are not logged in");
      });
     
     }, [])
    


    return (
        <div className="flex items-center justify-center min-h-screen flex-col ">
            {!whoami &&(<Login/>)}
            <span className="text-2xl">{whoami.username}</span>
            <span className="text-2xl">{whoami.email}</span>
        </div>
    )
}

export default login
