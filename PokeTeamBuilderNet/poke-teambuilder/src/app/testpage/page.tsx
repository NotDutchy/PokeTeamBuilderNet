/* eslint-disable @next/next/no-img-element */
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

export default async function Pokemon() {
  const client = createApolloClient();
  const { error, data } = await client.query({
    query: GET_POKEMON,
  });

  if (error) return <h1>Something went wrong!</h1>;

  return (
    <div>
      <img 
      src={data.pokemon.sprites.frontDefault}
      alt="Pokemon picture">
      </img>
      <h1 className="font-bold underline">{data.pokemon.id}</h1>
    </div>
  );
}
