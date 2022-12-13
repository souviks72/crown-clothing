import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { setCurrentUser } from "./store/user/user.action";

import Navigation from "./components/navigation/navigation.component";
import Directory from "./components/directory/directory.component";
import Auth from "./components/auth/auth.component";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase.utils";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Directory />} />
          <Route path="signin" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
