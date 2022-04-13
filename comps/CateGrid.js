import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content"

const GridComp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
`
const CatCont = styled.div`
    width: 110px;
    height: 110px;
    margin: 0.7em;

    @media only screen and (max-width: 600px) and (max-height: 750px) {
        width; 70px;
        height: 70px;
    }
    @media only screen and (min-width: 700px) {
        width: 150px;
        height: 150px;
    }
    @media only screen and (min-width: 1024px) {
        width: 180px;
        height: 180px;
    }
`
const CatImg = styled.img`
    height: 70%;
    width: 70%;
`
const CatName = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
`

export default function CateGrid() {

    return <GridComp>
        {
            <CatCont>
                <CatImg src={cat1.img} />
                <CatName>{cat1.title}</CatName>
            </CatCont>
        }
        {
            <CatCont>
                <CatImg src={cat2.img} />
                <CatName>{cat2.title}</CatName>
            </CatCont>
        }
        {
            <CatCont>
                <CatImg src={cat3.img} />
                <CatName>{cat3.title}</CatName>
            </CatCont>
        }
        {
            <CatCont>
                <CatImg src={cat4.img} />
                <CatName>{cat4.title}</CatName>
            </CatCont>
        }
        {
            <CatCont>
                <CatImg src={cat5.img} />
                <CatName>{cat5.title}</CatName>
            </CatCont>
        }
        {
            <CatCont>
                <CatImg src={cat6.img} />
                <CatName>{cat6.title}</CatName>
            </CatCont>
        }
    </GridComp>
}