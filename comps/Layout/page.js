import { useRouter } from "next/router";
import styled from 'styled-components';
import Menu from "../Menu";
import { PrimaryButton } from '../Button'

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Layout() {

    return (
        <LayoutComp>
            <Menu />
            <PrimaryButton/>
        </LayoutComp>
    )
}
