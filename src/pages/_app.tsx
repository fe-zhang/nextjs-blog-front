import {useEffect, useMemo, useState} from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import {useRouter} from 'next/router';

// components
import Header from '@components/Header/Index';
import Footer from '@components/Footer/Index';
import ProgressBar from '@components/ProgressBar/Index';

// style
import '@style/globals.css';

// 以下页面没有头尾，没有暗黑模式，个人用后台不想搞太花哨，能用就行
const confAndAdminPages = ['/admin', '/login', '/config'];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setLoading(true);
        }

        const handleRouteChangeDone = () => {
            setLoading(false);
        }

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeDone);
        router.events.on('routeChangeError', handleRouteChangeDone);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeDone)
            router.events.off('routeChangeError', handleRouteChangeDone)
        }
    }, [router.events]);

    const App = useMemo(() => {
        if (confAndAdminPages.includes(router.pathname)) {
            return (
                <>
                    <ProgressBar isAnimating={isLoading} key={router.pathname}></ProgressBar>
                    <Component {...pageProps} />
                </>
            );
        }
        return (
            <ThemeProvider>
                <ProgressBar isAnimating={isLoading} key={router.pathname}></ProgressBar>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        );
    }, [Component, isLoading, pageProps, router.pathname])

    if (confAndAdminPages.includes(router.pathname)) {
        return (
            <>
                <ProgressBar isAnimating={isLoading} key={router.pathname}></ProgressBar>
                <Component {...pageProps} />
            </>
        );
    }
    return (
        <>
            {App}
        </>
    )
}

export default MyApp;
