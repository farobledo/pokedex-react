import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import logoImg from "../img/unnamed.png";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">

          </div>
          <div class="col-md-8">
            <div class="card-body">
              <img alt="pokeapi-logo" src={logoImg} className="navbar-img" />
              <h1 class="card-title">Api de Pokemon Con React y Express </h1>
            </div>
          </div>
        </div>
      </div>


      <div>{favoritePokemons.length} ❤️</div>
    </nav>
  );
};

export default Navbar;
