import { useState } from "react";
import { useDispatch} from "react-redux";
import { enterUser } from "../store/usersSlice";
import { useNavigate } from "react-router-dom";

export default function LogInForm(){
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logSubmit(e) {
    e.preventDefault();
    
    if(!password || !email){
      alert('нужно заполнить все поля')
    }else{
      dispatch(enterUser({email, password}));
      navigate('/');
    }
    
  }

  return(
    <div className=''>
      <form className='' onSubmit={logSubmit}>
        <div className="mb-3">
          <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              required
              name='email'
              placeholder="Email"/>
        </div>
        <div className="mb-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="form-control"
            id="password"
            required
            name='password'
            placeholder="Пароль"/>
        </div>
        <div className="mb-3">
          <input type="submit" className="btn btn-success" value='Авторизироваться'/>
        </div>
      </form>
    </div>
  )
};