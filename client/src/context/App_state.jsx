import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './App_Context';
import axios from 'axios';

const App_state = (props) => {
  const url = 'http://localhost:3000/api';

  const [token, setToken] = useState("");

  const [receipe, setreceipe] = useState([]);

  const [savedReceipe, setsavedReceipe] = useState([]);

  const [user, setuser] = useState([]);

  const [userid,setuserid] = useState("");

  const[userReceipe,setuserReceipe] = useState([])

  const[isAuthenticated,setisAuthenticated] = useState(false)


  useEffect(() => {
    const fetchReceipe = async () => {
      const api = await axios.get(`${url}/`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(api.data.receipe);
      setreceipe(api.data.receipe);
    }
    fetchReceipe();

  }, []);

  const register = async (name, gmail, password) => {
    const api = await axios.post(`${url}/register`, {
      name, gmail, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true,
    }
    );
    return api;
  };

  const login = async (gmail, password) => {
    const api = await axios.post(`${url}/login`, {
      gmail,
      password,
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }
    );
    setToken(api.data.token);

    return api;
  };

  //addReceipe
  const addReceipe = async (title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl) => {
    const api = await axios.post(`${url}/add`, { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl },
      {
        headers:
        {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      }
    );

    return api;
  }

  return (
    <AppContext.Provider value={{

      login,
      register,
      addReceipe,
      receipe,
    }}>{props.children}</AppContext.Provider>
  )
}

export default App_state;
