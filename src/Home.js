import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB248684220.jpg"
            />

            <div className="home__row">
                <Product
                    id="4903495"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim praesentium ipsam distinctio esse debitis ducimus impedit excepturi repudiandae ut."
                    price={29.99}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
                    rating={5}
                />
                <Product
                    id="4903495"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim praesentium ipsam distinctio esse debitis ducimus impedit excepturi repudiandae ut."
                    price={49.5}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="4903395"
                    title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deserunt."
                    price={70.89}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
                    rating={3}
                />
                <Product
                    id="4929495"
                    title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deserunt."
                    price={144.24}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
                    rating={3}
                />
                <Product
                    id="2683495"
                    title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, deserunt."
                    price={250.98}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1982093"
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim praesentium ipsam distinctio esse debitis ducimus impedit excepturi repudiandae ut."
                    price={1999.99}
                    image="https://m.media-amazon.com/images/I/71bI0RQV0TL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
        </div>
    );
}

export default Home;
