import styled from 'styled-components';
import CateGrid from '../comps/CateGrid'
import Layout from "../comps/Layout/page";
import { PageTitle } from '../data/intro_content';

const Em = styled.span`
    color: #FF9042;
    font-style: normal;
    font-weight: 700;
`

const LayoutComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.5em;
`

export default function Intro() {
    return (
        <LayoutComp>
            <Layout></Layout>
            <h1>{PageTitle}</h1>
            <h4>Calculate how many Earth minutes you saved today based our <Em>12-question quiz</Em> on the following categories:</h4>
            <CateGrid />
        </LayoutComp>
    )
}