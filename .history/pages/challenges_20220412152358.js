import ChallengeCont from "../comps/Challenge_cont";
import { LayoutComp } from "../comps/Layout/index";

export default function Challenges() {
    return <LayoutComp>
        <h1>Challenges</h1>
        <h3>See how you can help the Earth
extend its lifespan!</h3>
        <ChallengeCont></ChallengeCont>
        <ChallengeCont></ChallengeCont>
        </LayoutComp>
}