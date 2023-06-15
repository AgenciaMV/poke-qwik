import { component$ } from '@builder.io/qwik';
//import { useServerTimeLoader } from '~/routes/layout';
import styles from './sidebar.module.css';

export default component$(() => {
  //const serverTime = useServerTimeLoader();

  return (
    <sidebar>
      <div class="container">
        <a href="https://www.marcosulloamata.com/" target="_blank" class={styles.anchor}>
          <span>Este es el side bar</span>
          <span class={styles.spacer}>|</span>
          {/* <span>{serverTime.value.date}</span> */}
        </a>
      </div>
    </sidebar>
  );
});
