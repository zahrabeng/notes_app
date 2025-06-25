import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';
import LandingPage from './pages/LandingPage';

const App = () => {
    return (
        <ChakraProvider value={system}>
            <LandingPage />
        </ChakraProvider>
    );
};

export default App;
