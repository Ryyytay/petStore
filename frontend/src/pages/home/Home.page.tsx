import { useNavigate } from 'react-router-dom';
import './home.scss';
import {Button} from "@mui/material";
import Pet_Images from "../../assets/images/Pet_Images.jpg";

const Home = () => {
    const redirect = useNavigate();
  return (
    <div className ='home'>
        <h1>Welcome to Pet Store</h1>
        <Button variant='outlined' color='primary' onClick={() => redirect("/products")}>
            Product List
        </Button>
        <img src={Pet_Images} alt='Pet_Images' />
    </div>
  )
}

export default Home