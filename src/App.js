import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import Directory from "./components/directory/directory.component";
import Auth from "./components/auth/auth.component";
import "./App.scss";

function App() {
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
