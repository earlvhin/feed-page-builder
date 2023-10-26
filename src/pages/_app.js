import "bootstrap/dist/css/bootstrap.css";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="main-wrapper py-5">
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
