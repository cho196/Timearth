import { useRouter } from "next/router";
import { Hamburger } from "../comps/Layout";
import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`
const PrimaryButton = styled.button`
    position: absolute;
    background: #FF9042;
    width: 190px;
    height: 50px;
    top: 720px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
    color: white;
`
const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

export default function Intro() {

    const r = useRouter();
    return (
        <Layout>
            <Hamburger />
            <h1>Let’s Start!</h1>
            <h4>Calculate how many Earth minutes you saved today based our <Em>12-question quiz</Em> on the following categories:</h4>
            <CateGrid />
            <PrimaryButton>Start Logging</PrimaryButton>
        </Layout>
    )
}