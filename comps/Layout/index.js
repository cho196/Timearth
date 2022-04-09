import { useRouter } from "next/router";
import styled from 'styled-components';

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
const StartButton = styled.button`
background: #FFFFFF;
position: absolute;
top: 78.2%;
`

export function Hamburger() {
    return <img class ="hamburger" src="/hamburger.svg" alt ="Hamburger Menu"/>
}

export function Logomark() {
    return <img class="logomark" src="/logomark.svg" alt="Timearth Logomark" />
}

export function BackgroundShape() {
    return <img class="background-shape" src="/pattern.svg" alt="Blue Rounded Shape" />
}

export default function Layout() {

    const r = useRouter();
    return (
        <LayoutComp>
            <Hamburger />
            <Logomark />
            <h1>It’s time to log your changes!</h1>
            <h4>Log your daily activities and see how many <Em>Earth minutes</Em> you have saved today!</h4>
            <StartButton
                onClick={
                    () => r.replace(
                        {
                            pathname: "/intro"
                        }
                    )
                }
            >Get Started</StartButton>
            <BackgroundShape />
        </LayoutComp>
    )
}
