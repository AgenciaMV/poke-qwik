import { component$ } from '@builder.io/qwik';

import styles from './footer.module.css';

export default component$(() => {
  

  return (
    <footer>
      <div class="container">
        <a href="https://www.marcosulloamata.com/" target="_blank" class={styles.anchor}>
          <span>Desarrollado por el Lic. Marcos Ulloa Mata</span>
          <span class={styles.spacer}>|</span>
          <span>2023</span>
        </a>
      </div>
    </footer>
  );
});
