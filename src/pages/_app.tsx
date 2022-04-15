import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// style
import '../styles/globals.less';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Header />
                <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
