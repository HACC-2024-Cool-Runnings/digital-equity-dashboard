import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '/styles/index.sass';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Digital Equity Dashboard',
	description: 'HACC 2025',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<nav className="flex justify-center gap-4 p-4 text-white">
					<a href="/" className="hover:underline">
						Home
					</a>
					<a href="/notes" className="hover:underline">
						Notes
					</a>
				</nav>
				{children}
			</body>
		</html>
	);
}
