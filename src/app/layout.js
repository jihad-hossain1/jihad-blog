import { Root } from "postcss";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jihad Blog",
  description: "Learn Effective Programming",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="">Home</a>
        </nav>
        {children}
        <footer>
          <a href="">Footer</a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
