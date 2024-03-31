import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

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
  }, [loading]);

  console.log(loading);

  return !loading ? <div className="min-h-screen flex flex-wrap  content-between bg-gray-400">
        <div className='w-full block'>
          <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      </div> :<div>Hello World</div>
}

export default App;
