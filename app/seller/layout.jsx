import SellerHeader from '../components/SellerHeader';
import Footer from '../components/Footer';
export default function DashboardLayout({ children }) {
  return (
   
      <div className="main-wrapper">
        <SellerHeader />
        <div className="page-wrapper">
          {children}
        </div>
        <Footer />
      </div>
   
  );
}