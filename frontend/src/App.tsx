import _React from "react";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-screen h-screen p-6 bg-[url(/background.jpg)] bg-cover">
        <Auth />
      </main>
    </>
  );
};

export default App;
