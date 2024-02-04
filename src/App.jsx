import { Button } from "./components/common";
import { GlobalStyles } from "./styled";

function App() {
  return (
    <>
    <GlobalStyles/>
    <h2>Buttons</h2>
    <Button label='Book Appointment'/>
    <Button label='Book Appointment' variant='outlined'/>
    <Button label='Book Appointment' rounded/>
    <Button label='Book Appointment' variant='outlined-light'/>
    <Button label='Book Appointment'  rounded variant='outlined-light'/>
    </>
  );
}

export default App;
