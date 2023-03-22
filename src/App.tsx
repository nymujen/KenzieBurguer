import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    <ToastContainer autoClose={1000} />
  </>
);

export default App;
