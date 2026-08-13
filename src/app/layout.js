import { Poppins, Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "IREED Global Immersion Program | POLIMI Graduate School of Management",
  description:
    "An exclusive international learning experience for students, professionals, and real estate associations to gain global exposure, international best practices, and industry insights in Milan, Italy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}