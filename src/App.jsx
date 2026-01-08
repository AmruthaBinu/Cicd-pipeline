import Header from "./components/Header";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Profile />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
