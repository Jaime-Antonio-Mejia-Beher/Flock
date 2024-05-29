import Nav from '../pages/nav/Nav';
import Footer from '../pages/nav/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
