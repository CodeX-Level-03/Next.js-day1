
import "./globals.css";

export const metadata = {
  title: "Hello New World",
  description: "A new world is waiting for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
