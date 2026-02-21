import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Dhinith Pragalyan",
  description: "AI Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}