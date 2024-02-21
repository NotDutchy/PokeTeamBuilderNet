import {ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import createApolloClient from "@/components/providers";
import Image from "next/image";

const GET_POKEMON = gql`
query Pokemon {
  pokemon {
      id
      name
      baseExperience
      height
      isDefault
      order
      weight
      locationAreaEncounters
      sprites {
          frontDefault
      }
  }
}`

export default async function Page() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_POKEMON,
  });
  console.log(data.pokemon.id);
  console.log(data.pokemon.sprites.frontDefault);

  const spriteUrl = data.pokemon.sprites.frontDefault;

  return (
    <div>
      <Image 
      src={data.pokemon.sprites.frontDefault}
      width={500}
      height={500}
      alt="Pokemon picture">
      </Image>
      <h1 className="font-bold underline">{data.pokemon.id}</h1>
    </div>
  );
}
