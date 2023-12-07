import { ChakraProvider } from "@chakra-ui/react";

import "@/styles/globals.css";
import "@/styles/PokemonCard.css";
import "@/styles/Loader.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
