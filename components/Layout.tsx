import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
