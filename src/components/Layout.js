import Navbar from "./Navbar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
