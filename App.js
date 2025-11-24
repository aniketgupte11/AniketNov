import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";

const RestaurantCard = (props) => {
  // we can also destructure props {resName,cusine}
  // in this case the code will be like const RestaurantCard = ({resName,cusine})=>{
  // then we can use resName and cusine directly instead of props.resName and props.cusines
  return (
    <div className="res-card">
      <h3>Restaurant Name: {props.resName}</h3>
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/46605226-a04c-44a6-8b6b-fca2a4f02f41_654105.JPG"
      ></img>
      <h4>Cuisine: {props.cusine}</h4>
      <h4>Rating: 4.5</h4>
      <h4>Time :40-45 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resName="Dominos" cusine="Burgers" />
        <RestaurantCard resName="KFC" cusine="Chicken Bangers" />
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer">This is a Footer</div>;
};
const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
