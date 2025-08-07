import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PricingTable />
      <Footer />
    </div>
  );
}
