import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Head>
                <title>CryptoPunk</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Header />
            </div>
        </div>
    )
}

export default Home
