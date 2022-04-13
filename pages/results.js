import styled from 'styled-components';
import { PageTitle, happyearth, sadearth } from '../data/res_content';
import { AgainButton, SeeButton } from '../comps/Button'
import Menu from "../comps/Menu";





const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const CardComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const CardImg = styled.img`
    object-fit: cover;
    
`
export function ResultCard() {
    return (
        <CardComp>
            <h3>What You Did <Em>Great</Em></h3>
            <CardImg src={happyearth.img} />
            
            <hr />
            
            <h3>What Could Be <Em>Improved</Em></h3>
            <CardImg src={sadearth.img} />
 ]
        </CardComp>
    )
}


const results = () => {
    return(
    <LayoutComp>
        <Menu />
        <h1>{PageTitle}</h1>
        <ResultCard />

        <AgainButton /><SeeButton />
        
    </LayoutComp>
    )
}

export default results
