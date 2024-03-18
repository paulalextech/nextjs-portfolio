'use client';
import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="dark:bg-stone-950">
				<ThemeProvider
					enableSystem={true}
					attribute="class"
					defaultTheme="system"
				>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
