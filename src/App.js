import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/login';
import Dashboard from './Components/dashBoard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'test@dev.com' && password === 'password@123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider>
      <div>
        {isLoggedIn ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
