import { component$ } from '@builder.io/qwik';
//import { useServerTimeLoader } from '~/routes/layout';
import styles from './footer.module.css';

export default component$(() => {
  //const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a href="https://www.marcosulloamata.com/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Marcos Ulloa Mata</span>
          <span class={styles.spacer}>|</span>
          {/* <span>{serverTime.value.date}</span> */}
        </a>
      </div>
    </footer>
  );
});
