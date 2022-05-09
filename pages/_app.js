import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";
import { AppWrapper } from "../hooks/contex/state";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <AppWrapper>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppWrapper>
  );
}
