import "./App.css";
import Navbar from "./Navbar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Kontakt from "./Kontakt";

function App() {
  return (
    <div className="px-5 py-2">
      <Navbar />
      <Card1 />
      <Card2 />
      <Card3 />
      <Kontakt />
    </div>
  );
}

export default App;
