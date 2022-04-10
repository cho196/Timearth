import { useRouter } from "next/router";
import { BackgroundShape } from "../comps/Layout";
import { NextButton, BackButton, SkipButton } from "../comps/Button"
import styled from 'styled-components';
import Breadcrumb from "../comps/Breadcrumb";
import { CategoryName, Question } from "../data/question_content";

export const Layout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-center: center;
`

export const SelectionCont = styled.div`
    width: 310px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    margin: .8em;
`

export default function Questions() {

    // const r = useRouter();

    return (
        <Layout>
            <BackButton />
            <SkipButton />
            <Breadcrumb />
            <h1>{CategoryName}</h1>
            <h2>{Question}</h2>
            <div className="section-selection">
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
                <SelectionCont></SelectionCont>
            </div>
            <BackgroundShape></BackgroundShape>
            <NextButton></NextButton>
        </Layout>

    )
}