import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import OtherServices from './pages/OtherServices';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import FirstVisitContactModal from "./components/FirstVisitContactModal";


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'Shah Cyber Tech Zone - Expert Phone & Computer Repair'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - Shah Cyber Tech Zone`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services />;
      case 'otherServices':
        return <OtherServices />;
      case 'products':
        return <Products />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">

      <FirstVisitContactModal />

      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );

}

export default App;
