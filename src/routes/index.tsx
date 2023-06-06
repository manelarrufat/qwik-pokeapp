import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';
import { is } from '../entry.preview';


export default component$(() => {

  const pokemonId = useSignal(1);

  const showBackImage = useSignal(false);

  const visibleImage = useSignal(false);
  

  const changePokemonId = $(( value: number) => {
    if( (pokemonId.value + value) <= 0 ) return;

    pokemonId.value += value;
  });



  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{ pokemonId }</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} isVisible={visibleImage.value}/>

      
      <div class="mt-2">
        <button onClick$={ () => changePokemonId( -1 ) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => changePokemonId( +1 ) } class="btn btn-primary mr-2">Següent</button>
        <button onClick$={ () => showBackImage.value = !showBackImage.value } class="btn btn-primary mr-2">Girar</button>
        <button onClick$={ () => visibleImage.value = !visibleImage.value } class="btn btn-primary">Revelar</button>
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
