import React, { Suspense } from "react";
import Loader from "./components/Loader";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Home />
        </main>
      </Suspense>
    </>
  );
}

export default App;
