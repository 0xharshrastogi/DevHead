import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import "./styles/css/main.css";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
