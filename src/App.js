import React, { Suspense } from "react";
import Loading from "./components/Loading";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main>
          <Home />
        </main>
      </Suspense>
    </>
  );
}

export default App;
