import bulbasaur from "./images/Bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur} alt={favPokemon} className="img1"></img>
      <h2>
        {favPokemon}'s type is {pokeCharacteristics.type}
        <span style={{ backgroundColor: "green", color: "white" }}></span>
        and one of their moves is {pokeCharacteristics.move}.
        <span style={{ backgroundColor: "#008000", color: "#ffffff" }}></span>
      </h2>
    </div>
  );
}

export default Showcase;
