import "../styles/global.css";
import Nav from "../components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Provider from "../components/Provider";
export const metadata = {
  title: "PromptPulse",
  description: "Discover & share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav />
        <main className="app">{children}</main>
        <ToastContainer position="top-right" autoClose={5000} />
      </body>
    </html>
  );
};

export default RootLayout;
