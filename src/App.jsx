import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import header from "./components/Header/header.jsx";
import footer from "./components/Footer/footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(()=>{setLoading(false)});
  }, []);

  if(loading == true){
      return 
      <div className="min-h-screen flex flex-wrap  content-between bg-gray-400">
        <div className='w-full block'>
          <header/>
          <main>
            {/* <Outlet/> */}
          </main>
          <footer/>
        </div>
      </div>
  }
  else{
    return <div>
      Hello World
    </div>
  }
}

export default App;
