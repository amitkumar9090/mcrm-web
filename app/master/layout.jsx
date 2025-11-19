import Header from '../components/Header';
import Footer from '../components/Footer';
export default function DashboardLayout({ children }) {
  return (
   
      <div className="main-wrapper">
        <Header />
        <div className="page-wrapper">
          {children}
        </div>
        <Footer />
      </div>
   
  );
}