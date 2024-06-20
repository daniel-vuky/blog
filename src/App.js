import './index.css';
import { RoutesWebsite } from './RoutesWebsite';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
function App() {
  return (
    <div>
      <TopNav />
      <RoutesWebsite />
      <Footer />
    </div>
  );
}

export default App;
