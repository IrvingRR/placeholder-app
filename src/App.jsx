import { Button, IconButton } from "./components/common";
import { GlobalStyles } from "./styled";
import { BiMenuAltLeft } from "react-icons/bi";

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
    <hr/>
    <h2>IconButton</h2>
    <IconButton icon={<BiMenuAltLeft/>}/>
    <IconButton icon={<BiMenuAltLeft/>} variant='outlined'/>
    <IconButton icon={<BiMenuAltLeft/>} rounded/>
    <IconButton icon={<BiMenuAltLeft/>} variant='outlined-light'/>
    <IconButton icon={<BiMenuAltLeft/>}  rounded variant='outlined-light'/>
    </>
  );
}

export default App;
