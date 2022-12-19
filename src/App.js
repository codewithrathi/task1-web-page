import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css";
import { padding } from "@mui/system";


function App() {
  return (

    <Container className="app">
        <Box sx={{ bgcolor: '#dff2f8', height: '100vh' }} style={{ padding: "40px" }}>
        <HorizontalLinearStepper/>
          </Box>
    </Container>
  );
}

export default App;
