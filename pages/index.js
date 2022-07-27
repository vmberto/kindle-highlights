import Head from "next/head";
import Upload from "../components/Upload";

const Home = () => (
    <>
        <Head>
            <title>Kindle Highlights</title>
            <meta name="description" content="Generate custom kindle highlights from CSV"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Upload/>
    </>
);

export default Home;
