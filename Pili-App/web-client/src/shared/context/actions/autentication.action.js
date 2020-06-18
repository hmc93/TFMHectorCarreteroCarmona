import jwt_decode from "jwt-decode";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
const axios = require('axios').default

export const loginUser = async (user,dispatch,seterror) =>{ //login
  
  try {
    const res = await axios.post('http://127.0.0.1:80/login', user)
    console.log(res)
    //pasar a json antes? probar a imprimir
    if (res.data.ok === true){
      const token = res.data.token;
      localStorage.setItem("jwt", token);
      const decoded = jwt_decode(token);
      console.log(decoded)
      seterror("")
      dispatch(setCurrentUser(decoded));
    } else {
      seterror(res.err)
      logoutUser(dispatch);
    }
    }  catch (e) {
        logoutUser(dispatch);
        console.log(e)
    }
}
  /* fetch("localhost:80/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok === true) {
        const token = data.token;
        localStorage.setItem("jwt", token);
        const decoded = jwt_decode(token);
        seterror("")
        dispatch(setCurrentUser(decoded));
      } else {
        seterror(data.err.message)
        logoutUser(dispatch);
      }
    })
    .catch(err => {
      logoutUser(dispatch);
    }); */

/* }; */

export const setCurrentUser = decoded => {//si se loguea , setear datos del usuario
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = (dispatch) => {//logout
  localStorage.removeItem("jwt");
  dispatch(setCurrentUser({}));
};