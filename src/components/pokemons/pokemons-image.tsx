/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
    id    :number;
    size? :number;
    backImage:boolean;
}

export const PokemonImage = component$(( {id, size = 200, backImage = false }: Props ) => {

let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

if(backImage) {
    imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
}


const imageLoaded = useSignal(false);

useTask$(({track}) => {
    track( ()=> id );
    imageLoaded.value = false;
});

    return (
        <div class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
        >
            {!imageLoaded.value && <span>Cargando...</span>}
           
        <img 
            src={imageUrl} 
            alt="PokeAPI"
            style={{width : `${size}px` }}
            onLoad$={() => 
            {
                // setTimeout(() =>{
                    imageLoaded.value = true;
                // },2000)
            }}
            class={{
                'hidden': !imageLoaded.value
            }} 
            />
            
        
        </div>
    )
});
