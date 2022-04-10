import { useRouter } from "next/router";
import styled from 'styled-components';

const Hamburger = styled.img`
    position: absolute;
    width: 30px;
    height: 26px;
    left: 30px;
    top: 60px;
    cursor: pointer;
`

export default function Menu() {

    return <Hamburger
        src="/hamburger.svg"
        alt="Hamburger Menu"
        onClick={
            () => {
  
            }
        }
    />

}
