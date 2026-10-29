import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const sans = localFont({
  src: './fonts/SchibstedGrotesk.ttf',
  weight: '400 900',
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Pedro Lima | Desenvolvedor Full Stack',
  description:
    'Desenvolvedor full stack em Recife. Sistemas web, APIs e integrações com React, Node.js, Java e PostgreSQL.',
  keywords: ['Pedro Lima', 'Desenvolvedor Full Stack', 'Full-Stack Developer', 'React', 'Node.js', 'Spring Boot', 'Recife'],
  authors: [{ name: 'Pedro Lima' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://devpedrolimab.github.io/Portfolio.github.io/',
    title: 'Pedro Lima | Desenvolvedor Full Stack',
    description: 'Sistemas web, APIs e integrações para a operação de empresas.',
    siteName: 'Pedro Lima',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#E3B94A',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={sans.variable}>{children}</body>
    </html>
  );
}
