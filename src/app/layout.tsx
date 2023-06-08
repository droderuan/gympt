import "./globals.css";
import MainTemplate from "../components/layout/template/Main";
export const metadata = {
  title: "GymPT",
  description: "Random gym exercises!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dk:bg-sky-950 bg-slate-10 dk:text-gray-50 text-slate-900">
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
