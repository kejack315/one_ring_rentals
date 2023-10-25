import Head from 'next/head';
import Header from "../components/header";
import CarouselSlide from "../components/carousel slide";
import HomeAdvancedSearch from "../components/home-advanced-search";
import Content from "../components/content";
import Footer from "../components/footer";
import Script from 'next/script';



export default function Home() {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>One Ring Rentals - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link
                    href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
                    rel="stylesheet"
                    type="text/css"
                />
                <link href="/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/css/style.css" rel="stylesheet" />
            </Head>
            <Header />
            <CarouselSlide />
            <HomeAdvancedSearch />
            <Content />
            <Footer />
            <div>
                <Script strategy="beforeInteractive" src="/js/common/jquery-1.11.1.min.js" />
                <Script strategy="beforeInteractive" src="/js/common/bootstrap.min.js" />
                <Script src="/js/common/bootstrap-datepicker.js" />
                <Script src="/js/common/chosen.min.js" />
                <Script src="/js/common/bootstrap-checkbox.js" />
                <Script src="/js/common/nice-scroll.js" />
                <Script src="/js/common/jquery-browser.js" />
                <Script src="/js/scripts.js" />
            </div>
        </div>
  );
}
