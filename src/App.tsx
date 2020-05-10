import React from 'react';

import logo from './trendwatch.svg';

function App() {
  const s =
    "私わたくしはその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚はばかる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執とっても心持は同じ事である。よそよそしい頭文字かしらもじなどはとても使う気にならない。Justin Bieber & Ariana Grande's 'Stuck With U' Video Features CameosFrom Demi Lovato, Hailey Bieber & More";
  return (
    <div className="App">
      <header className="App-header" style={{ height: "68px" }}>
        <img
          src={logo}
          alt="logo"
          width="130"
          style={{
            position: "fixed",
            top: "18px",
            left: "12px",
            background: "rgba(250, 250, 253, 0.9)",
            padding: "12px 14px",
          }}
        />
      </header>
      <div style={{ padding: "12px 12px" }}>{s.repeat(20)}</div>
    </div>
  );
}

export default App;
