import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    //   {/* <div className="">
    //     <img
    //       className={classes["main-image"]}
    //       src="https://unsplash.com/photos/-YHSwy6uqvk.jpg"
    //       alt="delicious food"
    //     />
    //   </div> */}
  );
};

export default Header;
