import type { NextPage } from 'next'
import Banner from "../components/Banner";
import HomeStore from "../store/HomeStore";
import {useState} from "react";

const Home: NextPage = () => {
    const [store] = useState(HomeStore);
    return (
        <div>
            <Banner {...store.banner} />
        </div>
    )
}

export default Home
