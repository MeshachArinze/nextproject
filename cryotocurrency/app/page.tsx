"use client";
import icon from "../public/images/cryptocurrency.png";

import Navbar from "../app/(navbar)/nav/page";
import Cryptocurrencies from "./(cryptocurrencies)/crypto/page";
import Homepage from "./(home)/home/page";
import Exchanges from "./(exchanges)/exchanges/page";
import CryptoDetails from "./(crypto)/[id]/page";
import News from "./(news)/news/page";

export default function Home() {
  const i = icon as  any;
  return (
    <div className="app">
      <div className="navbar">
        <Navbar  />
      </div>
      <div className="main">
        <div className="routes">
          <Homepage />

          <Exchanges />

          <Cryptocurrencies />

          <CryptoDetails />

          <News />
        </div>
      </div>
    </div>
  );
}
