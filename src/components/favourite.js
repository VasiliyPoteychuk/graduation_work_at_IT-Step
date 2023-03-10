import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFavorite, favoriteSelect } from "../store/favoriteSlice";
import Rating from "../helpers/rating";
import AddToCart from "../helpers//addToCard";
import Header from "../components/header";
import BackButton from "../helpers/backButton";
import Footer from "./footer";
import {changeCatalog} from "../store/productsSlice";


export default function Favorite(){
  const favoriteList = useSelector(favoriteSelect);
  const dispatch = useDispatch();

  return(
    <div  onClick={(e)=> dispatch(changeCatalog(e.target))}>
      <Header/>
      {favoriteList.length>0 && <BackButton/>}
      <div className="d-flex flex-wrap " style={{marginLeft:150+'px'}}>
        {favoriteList.length>0 ?
          favoriteList.map(el => 
            <div key={el.id} className=" d-flex align-items-center m-5 gap-3 border rounded shadow p-2 favorite" >
              <img src={el.thumbnail} className='card-img-top w-50  ' style={{height:250+'px',}} alt='картинка'/>
              <div className="d-flex flex-column justify-content-between gap-2">
                <h1>{el.title}</h1>
                <p>{el.description}</p>
                <h2>{el.price}$</h2>
                <Rating value={el.rating}/>
                <div className="btn-group gap-1">
                  <AddToCart product={el}/>
                  <button className="btn btn-outline-danger rounded" onClick={()=> dispatch(deleteFavorite(el.id))}>удалить</button>
                </div>
              </div>
            </div>  
          )
          :
          <div className="auth-form d-flex flex-column  gap-3">
            <h1>Вы ничего не добавили в избраное</h1>
            <NavLink to={'/'} ><button className='btn btn-dark'>Перейти на главную</button></NavLink>
          </div>
        }
      </div>
      <Footer/>
    </div>
  )
};