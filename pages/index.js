import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from "../components/header";
import CarouselSlide from "../components/carousel slide";
import HomeAdvancedSearch from "../components/home-advanced-search";
import Content from "../components/content";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div >
        <Head>
            <meta charSet="utf-8" />
            <title>One Ring Rentals - Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
            <link
                href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
                rel="stylesheet"
                type="text/css"
            />
            <link href="css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/style.css" rel="stylesheet" />
            <script src="../public/js/common/modernizr.js"></script>
        </Head>
        <Header >
        </Header>
        <CarouselSlide>
        </CarouselSlide>
        <HomeAdvancedSearch>
        </HomeAdvancedSearch>
        <Content></Content>
        <Footer></Footer>
        <script src="../public/js/common.js"></script>
        <script type="text/javascript" src="../public/js/common/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="../public/js/common/bootstrap.min.js"></script>
        <script type="text/javascript" src="../public/js/common/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="../public/js/common/chosen.min.js"></script>
        <script type="text/javascript" src="../public/js/common/bootstrap-checkbox.js"></script>
        <script type="text/javascript" src="../public/js/common/nice-scroll.js"></script>
        <script type="text/javascript" src="../public/js/common/jquery-browser.js"></script>
        <script type="text/javascript" src="../public/js/scripts.js"></script>
    </div>
  );
}
