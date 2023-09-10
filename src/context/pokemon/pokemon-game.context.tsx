import { createContextId } from "@builder.io/qwik";



export interface PokemonGameState {
    pokemonId: number;
    showBackImage: boolean;
    visibleImage: boolean;
}


export const PokemonGameContext = createContextId<PokemonGameState>('pokemon.game-context');