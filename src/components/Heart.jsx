import "./heart.css"
import { FaHeart} from 'react-icons/fa';
import { FaRegHeart} from 'react-icons/fa';
import {useState} from 'react';

function Heart() {

    const [liked, setLiked] = useState(false);

    const handleClick = () =>{
        // if(liked = true){
        //     setLiked(false)
        // }else{
        //     setLiked(true)
        // }
        liked == true ? setLiked(false) : setLiked(true);
    }

  return (
    <div onClick={handleClick}>
        {liked == true ? <FaHeart className="heart" /> : <FaRegHeart className="heart" />}
    </div>
  )
}

export default Heart