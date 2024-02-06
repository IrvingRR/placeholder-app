import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages";
import { GlobalStyles } from "./styled";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Toaster toastOptions={{ duration: 2000 }}/>
    <HomePage/>
    </>
  );
}

export default App;
