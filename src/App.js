import React, { useEffect,useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import { login, logout } from "./features/userSlice";
import Header from "./Header";
import Navbar from "./Navbar";
import Results from "./Results";
import requests from "./requests";
import {Divider} from "@material-ui/core";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [selectedOption, setSelectedOption] = useState(requests.fetchNature);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        <div className="user">
          <div className="fixed__top">
             <Header/>
             <Navbar setSelectedOption={setSelectedOption} />
          </div>
          <Divider/>
          <Results selectedOption={selectedOption} /> 
        </div>    
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
