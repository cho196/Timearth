import { useRouter } from "next/router";
import styled from 'styled-components';
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../data/intro_content";
import { SecondaryButton } from "./Button";


const Challenge_cont = styled.div`
border:1px solid lightgrey;
border-radius:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
margin:50px;
padding:15px;
`
const ChallengeHeading = styled.div`
display:flex;`

export function ChallengeHeading() {
    return <ChallengeHeading>
       <h2>Challenge Category</h2>
        <img class="challenge-img" src={cat1.img} />
    </ChallengeHeading>
}

export default function ChallengeCont() {
    return <Challenge_cont>
        <ChallengeHeading />
        <h3>Take the bus twice a week instead of driving to work!</h3>
        <p>Earth minutes saved in a year: 120 mins</p>
        <SecondaryButton></SecondaryButton>
    </Challenge_cont>
}