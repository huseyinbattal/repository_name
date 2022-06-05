import "./App.css";
import logo from "./logo.svg";
import BlogComp from "./components/Blog.js";

function App() {
  let headerone = <div>LET HEADERONE</div>;
  let content = (
    <div className="App">
      <h1>App.js</h1>
      <p>
        Prf<b>Bold</b>
        <i>ITALIC</i> {5 / 2}
        <b>--</b>
        {5 / 2 === 2.5 ? "yes" : "no"}
      </p>
      <img src={logo} alt="logo" className="App-logo" />
      {headerone}
      <BlogComp />
    </div>
  );
  return <div>{content}</div>;
}

export default App;
