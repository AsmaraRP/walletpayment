import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/main.css";
import "../styles/user.css";
import "../styles/component.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
