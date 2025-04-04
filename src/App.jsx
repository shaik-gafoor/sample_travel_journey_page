import React from "react";
import Header from "./components/Header";
import Trips from "./components/Trips";
function App() {
  return (
    <div>
      <Header />
      <Trips
        image="src/components/img.jpg"
        title="gafoor"
        country="India"
        name="gosala"
        dates="2022 - 2026"
      />
      <Trips
        image="src/components/img2.jpg"
        title="TEJA"
        country="India"
        name="gudlavalleru"
        dates="2022 - 2026"
      />
      <Trips
        image="src/components/img3.jpg"
        title="nouhid"
        country="India"
        name="pamaru"
        dates="2022 - 2026"
      />
      <Trips
        image="src/components/img4.jpg"
        title="chaitanya"
        country="India"
        name="machilipatanam"
        dates="2022 - 2026"
      />
      <Trips
        image="src/components/img5.jpg"
        title="vishwanath"
        country="India"
        name="machilipatanam"
        dates="2022 - 2026"
      />
    </div>
  );
}

export default App;
