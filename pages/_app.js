import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store/store";
import { setUser, clearAuth } from "../store/authSlice";
import { isTokenExpired } from "../src/utils";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  // Suppress specific React dev warning from third-party libs (e.g. react-quill's use of findDOMNode)
  useEffect(() => {
    if (typeof window === "undefined" || process.env.NODE_ENV === "production")
      return;

    const origWarn = console.warn;
    const origError = console.error;

    console.warn = (...args) => {
      try {
        const msg = args[0] + "";
        if (msg.includes("findDOMNode is deprecated")) return;
      } catch (e) {
        // ignore
      }
      origWarn(...args);
    };

    console.error = (...args) => {
      try {
        const msg = args[0] + "";
        if (msg.includes("findDOMNode is deprecated")) return;
      } catch (e) {
        // ignore
      }
      origError(...args);
    };

    return () => {
      console.warn = origWarn;
      console.error = origError;
    };
  }, []);

  // Bloquear navegación si está en modo mantenimiento
  useEffect(() => {
    if (maintenanceMode && router.pathname !== "/maintenance") {
      router.replace("/maintenance");
    }
  }, [router, maintenanceMode]);

  // Inicializar estado de auth desde sessionStorage al arrancar la app (cliente)
  useEffect(() => {
    if (typeof window === "undefined") return;

    // soportar ambas claves por compatibilidad
    const token =
      sessionStorage.getItem("token") || sessionStorage.getItem("jwtToken");
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (token) {
      // si el token está expirado, limpiar
      if (isTokenExpired(token)) {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("jwtToken");
        sessionStorage.removeItem("refreshToken");
        store.dispatch(clearAuth());
        return;
      }

      // setear en redux (setUser espera { token, refreshToken })
      store.dispatch(setUser({ token, refreshToken }));
    }
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Head>
          <title>Asoporkmag</title>
          {/*====== Favicon Icon ======*/}
          <link
            rel="shortcut icon"
            href="/assets/images/favicon.ico"
            type="image/png"
          />
          {/*====== FontAwesome css ======*/}
          <link
            rel="stylesheet"
            href="/assets/fonts/fontawesome/css/all.min.css"
          />
          {/*====== Flaticon css ======*/}
          <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
          {/*====== Bootstrap css ======*/}
          <link
            rel="stylesheet"
            href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          />
          {/*====== magnific-popup css ======*/}
          <link
            rel="stylesheet"
            href="/assets/vendor/magnific-popup/dist/magnific-popup.css"
          />
          {/*====== Slick-popup css ======*/}
          <link rel="stylesheet" href="/assets/vendor/slick/slick.css" />
          {/*====== Nice Select css ======*/}
          <link
            rel="stylesheet"
            href="/assets/vendor/nice-select/css/nice-select.css"
          />
          {/*====== Animate css ======*/}
          <link rel="stylesheet" href="/assets/vendor/animate.css" />
          {/*====== Default css ======*/}
          <link rel="stylesheet" href="/assets/css/default.css" />
          {/*====== Style css ======*/}
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {loader && <PreLoader />}
        <Component {...pageProps} />
      </Fragment>
    </Provider>
  );
}

export default MyApp;
