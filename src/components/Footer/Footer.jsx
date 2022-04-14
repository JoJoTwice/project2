import styled from "styled-components";
import { FooterItem } from './FooterItem';


export const Footer = () => {

    const FooterDiv = styled.div`
        display: flex;
        flex-direction: row;

        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        background-color: rgba(128, 128, 128, 0.503);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        z-index: 10;`
        
    const contactLinks = [
                    {link: "https://www.linkedin.com/in/richard-truchanowicz/",
                        iconURL: "./img/icons/linkedin.png",
                        altTxt: "LinkedIn Icon"},
                    {link: "https://github.com/rtruc/",
                        iconURL: "./img/icons/github.png",
                        altTxt: "Github Icon"}
                    ];

    return (
        <>
            <FooterDiv>
                {contactLinks.map((input, index) => {
                    return(
                        <div key={index}>
                        <FooterItem link={input.link}
                                    iconURL={input.iconURL}
                                    altTxt={input.altTxt} />
                        </div>
                    );
                })}
            </FooterDiv>
        </>
    )
}