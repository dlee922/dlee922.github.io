import { ThemeProvider } from "./ThemeContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Daniel H. Lee | Psychiatric Genomics & Bioinformatics",
  description:
    "MS Bioinformatics student at Northeastern University focused on psychiatric genomics, precision psychiatry, and computational biology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <main className="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
