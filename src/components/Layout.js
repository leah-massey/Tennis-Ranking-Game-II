import Navbar from "./Navbar";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
