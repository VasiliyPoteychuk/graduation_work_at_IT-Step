import { useState } from "react";
import LogInForm from "./logInForm";
import SingUpForm from "./signUpForm";
import "../styles/auth.css";
import { NavLink } from "react-router-dom";
import { userSelect } from "../store/usersSlice";
import { useSelector} from 'react-redux';

export default function Authorization(){
  const [active, setActive]=useState(true);
  const user = useSelector(userSelect);

  return(
    <div className="auth-form d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center">
        {active ? <button className="btn btn-secondary" onClick={()=> setActive(!active)}>Регистрация</button>:<button className="btn btn-secondary" onClick={()=> setActive(!active)}>Авторизация</button>}
        <NavLink to={"/"}><button type="button" className="btn-close" /></NavLink>
      </div>
      
      {active && user? <LogInForm />: <SingUpForm />}
      
    </div>
    
  )
};