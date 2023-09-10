import { $, component$, useContext } from '@builder.io/qwik';
import { type DocumentHead, useNavigate } from '@builder.io/qwik-city';

import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { PokemonGameContext } from '~/context';


export default component$(() => {

  const pokemonGame = useContext( PokemonGameContext );
  // const pokemonId = useSignal(1);
  // const showBackImage = useSignal(false);
  // const visibleImage = useSignal(true);
  

  const changePokemonId = $(( value: number) => {
    if( ( pokemonGame.pokemonId + value) <= 0 ) return;

    pokemonGame.pokemonId += value;
  });

  const nav = useNavigate();

  const goToPokemon = $(() => {
    nav(`/pokemon/${ pokemonGame.pokemonId }/`);
  });



  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{ pokemonGame.pokemonId }</span>

      {/* <Link href={`/pokemon/${ pokemonId.value }/`}></Link> */}
      <div onClick$={ () => goToPokemon() }>
        <PokemonImage 
          id={pokemonGame.pokemonId} 
          backImage={pokemonGame.showBackImage} 
          isVisible={pokemonGame.visibleImage}
        />
      </div>
      

      
      <div class="mt-2">
        <button onClick$={ () => changePokemonId( -1 ) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => changePokemonId( +1 ) } class="btn btn-primary mr-2">Següent</button>
        <button onClick$={ () => pokemonGame.showBackImage = !pokemonGame.showBackImage } class="btn btn-primary mr-2">Girar</button>
        <button onClick$={ () => pokemonGame.visibleImage = !pokemonGame.visibleImage } class="btn btn-primary">Revelar</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'Primera aplicació amb Qwik',
    },
  ],
};
