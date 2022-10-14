import AppContextProvider from "./contexts/AppContext/AppContextProvider";
import "./global-styles.css";
import AppRouter from "./router/AppRouter";
import Header from "./pages/Register/components/Header";
import Footer from "./pages/Register/components/Footer";

function App() {
  return (
    <AppContextProvider>
      <Header/>
      <AppRouter />
      <Footer/>
    </AppContextProvider>
  );
}

export default App;
