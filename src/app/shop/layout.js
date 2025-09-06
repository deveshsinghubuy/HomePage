import "../globals.css";
import Nav from "../component/nav";
import Footer from "../component/footer";

export const metadata = {
  title: "Shop - Create Next App",
  description: "Shop page layout",
};

export default function ShopLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
