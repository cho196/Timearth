import { BtnStyle, BtnText, TextBtnStyle } from "../data/index_content"
import { useRouter } from "next/router";
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => BtnStyle[props.BtnStyle].bgcolor};
    color: ${props => BtnStyle[props.BtnStyle].txtcolor};
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    border-radius: 8px;
    width: 190px;
    height: 50px;
    bottom: 15.88%;
    position: absolute;
`
const TextButton = styled.div`
    display: flex;
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    left: ${props => TextBtnStyle[props.TextBtnStyle].left};
    right: ${props => TextBtnStyle[props.TextBtnStyle].right};
    top: 45px;
    color: ${props => TextBtnStyle[props.TextBtnStyle].color}
`

export function BackButton() {
    const r = useRouter();

    return <TextButton
        TextBtnStyle="back"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/intro"
                    }
                )
            }
        }>
        <img src ="../chevronleft.svg"></img>
        {BtnText.back}
    </TextButton>
}

export function SkipButton() {
    // const r = useRouter();

    return <TextButton
        TextBtnStyle = "skip">
        {BtnText.skip}
    </TextButton>
}

export function CTAButton() {
    const r = useRouter();
    
    return <Button
        BtnStyle="white"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/intro"
                    }
                )
            }
        }
    >{BtnText.index}
    </Button>
}

export function PrimaryButton() {
    const r = useRouter();
    return <Button
        BtnStyle="orange"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/questions"
                    }
                )
            }
        }
    >{BtnText.intro}
    </Button>
}

export function NextButton() {
    const r = useRouter();
    
    return <Button
        BtnStyle="white"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/intro"
                    }
                )
            }
        }
    >{BtnText.next}
    </Button>
}

export function ViewButton() {
    const r = useRouter();
    return <Button
        BtnStyle="orange"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/"
                    }
                )
            }
        }
    >{BtnText.view}
    </Button>
}

export function LearnButton() {
    const r = useRouter();
    return <Button
        BtnStyle="orange"
        onClick={
            () => {
                r.replace(
                    {
                        pathname: "/"
                    }
                )
            }
        }
    >{BtnText.learn}
    </Button>
}