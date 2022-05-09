import Head from "next/head";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="overflow-x-hidden ">
      <Head>
        <title>Facebook</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {/* Header */}
      <Header />
      <main className="flex bg-gray-200 ">
        {/* Side bar */}
        <Sidebar />
        {/* Feed */}
        {/* <Feed /> */}
        <Feed />
        {/* Widgets */}
        <Sidebar />
      </main>
    </div>
  );
}
