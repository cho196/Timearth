import { useRouter } from "next/router";
import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content";


const Challenge_cont = styled.div`
border:1px solid black;
display:flex;
`


export default function ChallengeCont() {
    return <Challenge_cont>
        <h2>Challenge Category</h2>
        <h3>Take the bus twice a week instead of driving to work!</h3>
    </Challenge_cont>
}