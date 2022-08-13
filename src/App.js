import './App.css';
import './Fonts.css'
import Layout from './module/Layout/Layout';
import { ThemeProvider } from '@mui/material';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Layout/>
     </ThemeProvider>
  );
}

export default App;
