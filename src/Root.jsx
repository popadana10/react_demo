import Header from "./components/Header";
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <>
        <Header/>
            <main>
        <Outlet/>
                <h2>Content will be changing here</h2></main>
        <Footer/>
        </>
    )
}

export default Root;