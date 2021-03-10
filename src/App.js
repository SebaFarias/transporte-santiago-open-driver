import './App.css';
import PerfilBar from './components/PerfilBar'
import Footer from'./components/Footer'
import { AuthContextProvider } from './components/AuthContext'
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AuthContextProvider>
      <PerfilBar/>
      <AppRouter/>
      <Footer/>
    </AuthContextProvider>
  );
}

export default App;
