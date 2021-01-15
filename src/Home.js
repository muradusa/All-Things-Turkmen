import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://turkmenportal.com/images/uploads/compositions/9981a84d0da4b56a49262e2a77d1b39f.JPG"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12325"
            title="Chapan Tribe Dress"
            price={129.99}
            rating={5}
            image="https://i.etsystatic.com/9882576/r/il/3ea411/2197399361/il_1140xN.2197399361_jojg.jpg"
          />

          <Product
            id="12325"
            title="Women Dress"
            price={89.99}
            rating={5}
            image="https://i.etsystatic.com/12112813/r/il/3c3031/2060887435/il_1140xN.2060887435_8y0c.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12325"
            title="Wedding Women Headdress"
            price={29.99}
            rating={5}
            image="https://i.etsystatic.com/10706104/r/il/cf2cff/1839852228/il_1140xN.1839852228_53i4.jpg"
          />
          <Product
            id="12325"
            title="Silk Embroidered Turkmen Tekke Tribe Coat"
            price={249.99}
            rating={5}
            image="https://i.etsystatic.com/8503298/r/il/ed1f3f/2261716645/il_1140xN.2261716645_8mnv.jpg"
          />

          <Product
            id="12325"
            title="Antique Turkmen Tekke Rug"
            price={319.99}
            rating={5}
            image="https://i.etsystatic.com/16895512/r/il/7fe979/2361684161/il_1140xN.2361684161_nazb.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12325"
            title="Vintage Turkmen Cuff Bracelet"
            price={49.99}
            rating={5}
            image="https://i.etsystatic.com/18962265/r/il/f146da/2388003384/il_1140xN.2388003384_3gy9.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
