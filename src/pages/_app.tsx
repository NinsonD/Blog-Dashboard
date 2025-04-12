import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { CustomThemeProvider } from "../theme/context/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </Provider>
  );
}

export default MyApp;
// // This is the main entry point of the Next.js application.
// // It wraps the application with Redux Provider for state management and a custom theme provider for styling.
