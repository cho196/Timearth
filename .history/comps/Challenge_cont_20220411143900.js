import { useRouter } from "next/router";
import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content";
import { SecondaryButton } from "./Button";


const Challenge_cont = styled.div`
border:1px solid black;
display:flex;
flex-direction:column;
align-items:flex-start;
margin:100px;
padding:15px;
`


export default function ChallengeCont() {
    return <Challenge_cont>
        <div class="row">
        <h2>Challenge Category</h2>
        <img src={cat1.img} />
        </div>
        <h3>Take the bus twice a week instead of driving to work!</h3>
        <p>Earth minutes saved in a year: 120 mins</p>
        <StartButton></StartButton>
    </Challenge_cont>
}