import ChallengeCont from "../comps/Challenge_cont";
import Layout from "../comps/Layout/page"

const AllChallengesCont = styled.div`
display:flex;`

export default function Challenges() {
    return <div>
    <Layout></Layout>
    <h1>Challenges</h1>
        <h3>See how you can help the Earth
extend its lifespan!</h3>
        <AllChallengesCont>
        <ChallengeCont></ChallengeCont>
        <ChallengeCont></ChallengeCont>
        </AllChallengesCont>
    </div>
}