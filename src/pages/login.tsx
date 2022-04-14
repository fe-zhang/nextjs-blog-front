import type { NextPage } from 'next'
import HomeStore from "../store/HomeStore";
import {useState} from "react";
import {Input, Button} from 'antd';

const Home: NextPage = () => {
    const [store] = useState(HomeStore);
    return (
        <div>
            <div>
                <Input />
                <Input />
                <Button>
                    登陆
                </Button>
            </div>
        </div>
    )
}

export default Home
