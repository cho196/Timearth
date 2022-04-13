import styled from 'styled-components';
import { Logomark } from '../comps/Layout';
import { PageTitle } from '../data/about_content';
import { LearnButton } from '../comps/Button'
import Menu from "../comps/Menu";


const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

const TextCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const TextComp = styled.div`
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
width: 45%;
`

const about = () => {
  return (
    <LayoutComp>
        <Menu />
        <h1>{PageTitle}</h1>
        <Logomark />
        <TextCont>
            <TextComp>
                <h2>Our planet is in <Em>danger</Em></h2>
                <h4>
                    Human actions are the leading cause of
                    climate change. Factors such as transportation
                    and water usage can yield detrimental effects over time.
                </h4>
            </TextComp>
            <TextComp>
                <h2>Our <Em>Purpose</Em></h2>
                <h4>
                    This app was created to bring
                    awareenss to the impact our everyday
                    action can have on the planet.
                </h4>
            </TextComp>
       </TextCont>
        <LearnButton />

    </LayoutComp>
  )
}

export default about