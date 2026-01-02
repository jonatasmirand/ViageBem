import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "@/app/styles/globals.css"


export const metadata: Metadata = {
  title: "ViageBem",
  description: "No ViageBem, você consegue ver os melhores pacotes de viagem para você e sua familia, podendo escolher promoções imperdíveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}