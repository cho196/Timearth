import { useRouter } from "next/router";
import styled from 'styled-components';
import { CTAButton } from '../Button'
import { PageTitle } from '../../data/index_content'
import Menu from "../Menu";

const LayoutComp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 6.5em;
`

const Em = styled.span`
color: #6B97ED;
font-style: normal;
font-weight: 700;
`

export function Logomark() {
    return <img class="logomark" src="/logomark.svg" alt="Timearth Logomark" />
}

export function BackgroundShape() {
    // return <img class="background-shape" src="/pattern.svg" alt="Blue Rounded Shape" />
    return <div class="background-shape"></div>
}

export default function Layout() {

    const r = useRouter();
    return (
        <LayoutComp>
            <Menu />
            <Logomark />
            <h1>{PageTitle}</h1>
            <h4>Log your daily activities and see how many <Em>Earth minutes</Em> you have saved today!</h4>
            <BackgroundShape />
            <CTAButton />
        </LayoutComp>
    )
}
