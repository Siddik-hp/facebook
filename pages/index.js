import Head from "next/head";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import ActiveUser from "../components/ActivUser/ActiveUser";
export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="overflow-x-hidden h-[100vh] overflow-y-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      {/* Header */}
      <Header />
      <main className="flex bg-gray-200 mx-auto">
        {/* Side bar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <ActiveUser />
      </main>
    </div>
  );
}
