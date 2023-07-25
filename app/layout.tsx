import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import AuthProvider from "@/contexts/AuthProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Orbit Zone",
  description: "Car Sell & Buy Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
