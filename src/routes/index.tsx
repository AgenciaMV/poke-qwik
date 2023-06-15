import { $,component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { PokemonImage } from '~/components/pokemons/pokemons-image';


export default component$(() => {

const pokemonId= useSignal(1);

const showBackImage= useSignal(false);

const changePokemonId = $((value:number) => {
  if((pokemonId.value + value) <= 0 ) return;
  pokemonId.value += value;
});


return (
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi velit a voluptatibus molestiae, magni provident voluptate fugit blanditiis, voluptatem officia, amet error accusantium laborum dignissimos maxime vitae dolorem ratione?
    Doloribus, magnam perspiciatis illum consequuntur iure modi magni repudiandae fugiat ipsam accusantium asperiores minus saepe hic reiciendis, exercitationem placeat quas commodi! Reprehenderit modi veritatis maiores inventore aperiam, dolores eveniet delectus.
    Iure itaque praesentium consequuntur maiores ex fugiat aspernatur iste. Blanditiis iure, tempora nulla ipsum incidunt harum laboriosam, voluptas eaque ad illum deleniti esse fugiat dolorum perspiciatis eum, sequi assumenda rerum!
    Assumenda perferendis natus rem repudiandae repellendus dolor, tempora rerum alias tenetur quod eum. Saepe praesentium laborum eum incidunt quos expedita ea iure minima id cum corporis eveniet, perspiciatis voluptatum quidem?
    Suscipit asperiores consequuntur libero doloremque officia ut possimus esse error assumenda hic consequatur aut enim accusantium, reprehenderit recusandae non, neque labore molestias molestiae! In corporis, impedit excepturi qui nobis doloribus!
    Vitae aspernatur temporibus in voluptates dignissimos non rem ab nobis iste, eveniet eligendi, laborum asperiores aperiam molestias laudantium debitis delectus, sunt eos. Eum praesentium quas necessitatibus repellat tempora, voluptatibus quia.
    Natus fuga repellendus, dicta modi vero quis eius reiciendis. Culpa illo labore beatae neque voluptates, eius saepe veritatis doloremque. Qui sint vitae eveniet quae, sapiente perspiciatis porro. Unde, perspiciatis voluptatem?
    Ipsa optio atque maiores perferendis perspiciatis! Nobis natus est id quod reiciendis quisquam dolore deleniti fugiat asperiores, expedita nihil maxime dolorum provident eveniet autem impedit eum possimus numquam rem laborum?
    Eum voluptates eveniet reprehenderit eaque in magnam unde corrupti dicta rem possimus ad optio, repudiandae neque explicabo expedita tempora accusantium eos cum itaque nostrum, vero corporis? Tempore natus odio quisquam.
    Adipisci impedit, laboriosam aspernatur nobis placeat veniam eum ut sapiente dignissimos. Laudantium suscipit, harum corporis repudiandae magnam dolorum quidem nostrum. Sunt doloribus fuga esse corporis sint nobis cupiditate? Totam, tempora?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae, quasi non, sint qui voluptatibus explicabo saepe iusto ex distinctio eaque consequatur asperiores fugit magni voluptates vel, fuga eos cumque.
    Accusamus fugiat numquam aperiam esse eos necessitatibus consequuntur inventore, et explicabo perspiciatis sapiente quisquam illo incidunt fuga tempore sint, nam nobis molestiae illum. Quos, cum. Beatae deserunt quam voluptates ratione?
    Perspiciatis necessitatibus cupiditate dicta repellendus voluptates cum fugit enim earum! Ipsum aut accusantium architecto vero asperiores aperiam quas, ad earum iste! Necessitatibus sapiente beatae, rem maiores facere suscipit neque ab?
    Praesentium quidem expedita eum aut ducimus ipsum, voluptatibus repellendus, quibusdam, molestias totam illum debitis soluta minus commodi ut eos sint minima alias perspiciatis. Quos ad iste voluptates beatae facere voluptatibus?
    Eos odio ullam nemo veritatis esse dolorum aliquam similique minima tempora vero? Voluptatem, soluta? Aut repudiandae dolore assumenda? Similique sequi veritatis odio beatae doloremque dolores impedit nemo aperiam vero perferendis.
    Ab iste ullam, quasi error sunt inventore perspiciatis ad, mollitia dolorem saepe ratione asperiores alias enim. Nostrum reprehenderit itaque deleniti cumque unde repellat saepe, vel fuga fugit laboriosam ducimus ullam?
    Quidem laudantium iure inventore. Nemo mollitia cumque minima ea animi ut laboriosam ipsam atque ad quisquam vitae, vel maiores eos et sint debitis obcaecati vero nihil totam. Excepturi, dolorum magnam.
    Eveniet obcaecati laudantium reiciendis maxime voluptas sint porro culpa perferendis exercitationem accusantium recusandae labore, natus illum impedit, quisquam quidem officiis temporibus dolores sit blanditiis. Rem quisquam molestias autem exercitationem. Ipsa.
    Doloremque dolores aspernatur incidunt dolore qui mollitia perferendis possimus sint voluptates voluptatem at ipsam temporibus, similique suscipit pariatur corporis itaque voluptate harum earum nobis. Voluptatum velit quis atque facilis unde.
    Saepe dolores neque libero maiores facilis repellendus, ullam suscipit labore odio quibusdam cumque nihil, commodi numquam fuga iusto eius. Fuga libero doloremque blanditiis enim cumque eius cum autem quae debitis.</p>
      <span class="text-2xl">Buscador Simple</span>
      <span class='text-9xl' >{pokemonId}</span>


<PokemonImage id={pokemonId.value} backImage = {showBackImage.value} />

<div class='mt-2'>
<button onClick$={ () => changePokemonId(-1) } class='btn btn-primary mr-2'>Anterior</button>
<button onClick$={ () => changePokemonId(+1) } class='btn btn-primary mr-2' >Siguiente</button>
<button onClick$={() => showBackImage.value = !showBackImage.value} class='btn btn-primary'>Voltear</button>
</div>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Marcos Ulloa Mata',
  meta: [
    {
      name: 'Web de Marcos Ulloa',
      content: 'Esta en mi aplicación de apuntes',
    },
  ],
};
