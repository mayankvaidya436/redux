import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Auth"; 
import UserProfile from "./Components/UserProfile";
import { useSelector } from "react-redux";
import React,{Fragment} from "react";
function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
