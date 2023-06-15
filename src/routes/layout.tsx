import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Navbar from "~/components/shared/navbar/navbar";
import Footer from "~/components/shared/footer/footer";

import styles from "./styles.css?inline";
import Sidebar from "~/components/shared/sidebar/sidebar";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <div>
      <div class="bg-gray-500 h-screen w-64 p-4 fixed">
        <Sidebar />
      </div>
      <div class="flex flex-col h-screen w-full pl-64">
        <header class="bg-gray-400 p-4 sticky top-0 ">
          <Navbar />
        </header>
        <div class="flex-grow p-4">
          <main class="flex flex-col items-center justify-center">
            <Slot />
          </main>
        </div>
        <div class="bg-gray-900 p-2 sticky bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
});
