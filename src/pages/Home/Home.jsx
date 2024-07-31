// @ts-ignore
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from '../../components/Card/Card';
import news from '../../Data'
import { HomeContainer } from "./Styled";

export default function Home() {

    return (
        <>
            <Navbar />
            <HomeContainer>
                {news.map((item, index) => (<Card key={index} news={item} />))}
            </HomeContainer>
        </>
    )
};