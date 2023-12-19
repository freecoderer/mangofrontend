import { useNavigate } from "react-router-dom";
import shav from "../../assets/imgs/Shav.jpeg";
import china from "../../assets/imgs/china.webp";
import defaultImg from "../../assets/imgs/default.png";
import japan from "../../assets/imgs/japan.jpeg";
import korean from "../../assets/imgs/korean.jpeg";
import steak from "../../assets/imgs/steak.jpg";
import "./restaurantsBox.scss";

interface RestaurantProps {
  id: number;
  addressName: string;
  categoryName: string;
  imageUrl: string;
  placeName: string;
}
export default function RestaurantsBox ( {id, addressName, categoryName, imageUrl, placeName}: RestaurantProps ){
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(`/detail?id=${id}`);
  };
    
    return (
        <div className="restaurantBox" onClick={handlePage}>
          {
            categoryName === "한식" && (
              <img src={korean} className="restaurantImg" alt={korean}/>
            )
          }
          {
            categoryName === "샤브샤브" && (
              <img src={shav} className="restaurantImg" alt={shav}/>
            )
          }
          {
            categoryName === "중식" && (
              <img src={china} className="restaurantImg" alt={china}/>
            )
          }
          {
            categoryName === "일식" && (
              <img src={japan} className="restaurantImg" alt={japan}/>
            )
          }
          {
            categoryName === "양식" && (
              <img src={steak} className="restaurantImg" alt={steak}/>
            )
          }
          {
            (categoryName !== "양식" && categoryName !== "일식" && categoryName !== "중식" && categoryName !== "샤브샤브" && categoryName !== "한식") && (
              <img src={defaultImg} className="restaurantImg" alt={defaultImg}/>
            )
          }
            <div className="restaurantContent">
              <div className="restaurantTitle">
                <div className="restaurantLoc">{categoryName}</div>
                {/* <div className="score">5.0</div> */}
              </div>
              <div className="restaurantName">{placeName}</div>
              {/* <p>해당 업체에 대한 한 줄 설명</p> */}
            </div>
        </div>
    )
}