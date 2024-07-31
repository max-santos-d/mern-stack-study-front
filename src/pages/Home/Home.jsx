// @ts-ignore
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from '../../components/Card/Card';
import news from '../../Data'

export default function Home() {

    return (
        <>
            <Navbar />
            {news.map((item, index) => (<Card key={index} news={item} />))}
        </>
    )
};