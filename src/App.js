import logo from './logo.svg';
import './App.css';
import Custom_btn from './components/Custom_btn';
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-800">
      Hello world!
    </h1>
    <Custom_btn data="show" />
    <Custom_btn data="Login" />
    <Custom_btn data="signup" />
    <Custom_btn data="check" />
    </div>
  );
}

export default App;
