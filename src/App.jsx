import React from "react";
import Header from "./components/Header";
import Trips from "./components/Trips";
function App() {
  return (
    <div>
      <Header />
      <Trips
        image="/sample_travel_journey_page/images/img.jpg"
        name=" Shaik Gafoor"
        country="India"
        city="gosala"
        dates="2022 - 2026"
        course="Full Stack Development"
      />
      <Trips
        image="/sample_travel_journey_page/images/img2.jpg"
        name="N.Teja"
        country="India"
        city="gudlavalleru"
        dates="2022 - 2026"
        course="Data Analyst"
      />
      <Trips
        image="/sample_travel_journey_page/images/img3.jpg"
        name="Shaik Nouhid"
        country="India"
        city="pamaru"
        dates="2022 - 2026"
        course="Machine Learning"
      />
      <Trips
        image="/sample_travel_journey_page/images/img4.jpg"
        name="S.Chaithanya"
        country="India"
        city="machilipatanam"
        dates="2022 - 2026"
        course="Full Stack Development"
      />
      <Trips
        image="/sample_travel_journey_page/images/img5.jpg"
        name="Vishwanath"
        country="India"
        city="machilipatanam"
        dates="2022 - 2026"
        course="Java Development"
      />
    </div>
  );
}

export default App;
