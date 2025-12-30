import { useState, useEffect } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  id: number;
}

const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonById = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon({
      id: data.id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    //properties
    isLoading,
    pokemon,
    formatedId: id.toString().padStart(3, "0"),
  };
};

export default usePokemon;
