import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello User
                        </span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
