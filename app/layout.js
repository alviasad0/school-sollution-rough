import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Sidebar from "@/components/shared/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "School Sollution",
  description: "A sollution webpage for schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}> 
        <div className="flex">
      <div className="w-[20%]">
      <Sidebar></Sidebar>
      </div>
      <div className="w-[80%]">
        <Navbar></Navbar>
      {children}
      </div>
        </div>
        

      </body>
    </html>
  );
}
