import { component$ } from '@builder.io/qwik';
//import { Logo } from '../../icons/logo';
//import styles from './navbar.module.css';

export default component$(() => {
   return (
    <header>
      <div>
        {/* <div >
          <a href="/" title="Logo Marcos Ulloa">
            <Logo height={50} width={143} />
          </a>
        </div> */}
        <ul class="flex justify-center gap-4" >
          <li class="li-menu" >
            <a href="#" target="_blank">
              Derecho Penal
            </a>
          </li>
          <li class="li-menu ">
            <a href="#" target="_blank">
              Derecho Civil
            </a>
          </li>
          <li class="li-menu ">
            <a href="#" target="_blank">
              Derecho Familia
            </a>
          </li>
          <li class="li-menu ">
            <a href="#" target="_blank">
              Derecho Laboral
            </a>
          </li>
          <li class="li-menu ">
            <a href="#" target="_blank">
              Derecho Constitucional
            </a>
          </li>
          <li class="li-menu ">
            <a href="#" target="_blank">
              Derecho Comercial
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
