import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Pedro Lima | Full-Stack Developer & Tech Innovator",
  description: "Computer Science student and Full-Stack Developer specializing in modern web applications, automation, and digital solutions. Experienced in React, Next.js, Spring Boot, and cloud technologies.",
  keywords: ["Pedro Lima", "Full-Stack Developer", "Software Engineer", "React", "Next.js", "Spring Boot", "Web Development", "Portfolio"],
  authors: [{ name: "Pedro Lima" }],
  creator: "Pedro Lima",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://devpedrolimab.github.io/",
    title: "Pedro Lima | Full-Stack Developer & Tech Innovator",
    description: "Computer Science student and Full-Stack Developer specializing in modern web applications, automation, and digital solutions.",
    siteName: "Pedro Lima Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Lima | Full-Stack Developer",
    description: "Building modern web applications with cutting-edge technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
