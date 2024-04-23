import React from 'react';  
import { useState } from 'react';
import { Link as LinkR} from "react-router-dom";
import styled from 'styled-components';
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa";
import { useTheme } from 'styled-components';




const Nav = styled.div`
background-color : ${({theme}) => theme.card_light};
height : 80px;
dispaly : flex;
justify-content : center;
align-items : center;
font-size : 1rem;
position : sticky;
top :0;
z-index: 10;
@media screen and (max-width:960px){
    transition :0.8s all ease;
}
`;

const NavContainer = styled.div`
display : flex;
justify-content : space-between;
height : 60px;
z-index : 1;
width : 100%;
padding : 0 24px;
max-width :1200px;
`;

const NavLogo = styled(LinkR)`
display : flex
justify-content : flex-start;
cursor : pointer;
text-decoration : none;
align-items: center;
width :80%;
@media screen and (max-width : 640px){
padding : 0 6px;
}
`;

const MobileIcon = styled.div`
display : none;
@media screen and (max-width: 768px){
    display: block;
    position : absolute;
    top:0;
    right:0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor:pointer;
    color: ${({theme}) => theme.text_primary}
}
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
`;

 const ButtonContainer = styled.div`
  width: 100%;  
 order :2;
  display: flex;
  justify-content: end;
  gap:12px;
  
  align-items: center;
  padding: 10 10px;
  margin:5px;
  @media screen and (max-width: 8px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background-color : transparent;
  color: ${({theme}) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  margin : 100px
  
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const LinkedInButton = styled.a`
  background-color : transparent;
  color: ${({theme}) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  margin : 5px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
padding :0 4px;
font-weight : bold;
font-size : 18px;
`;

const MobileMenu = styled.div`
display :flex;
justify-content : center;
flex-direction : column;
gap : 16px;
position : absolute;
top : 80;
right : 0;
width :100px;
padding :42px 40px 24px 40px;
background : ${({theme}) => theme.card_light+99};
transition : all 0.3s ease-in-out;
transform : ${({open}) => open ? 'transla teX(0)' :  'translateX(100%)'};
border-radius : 0 0 20 20px  ;
box-shadow : 0 5px 10px rgba(0,0,0,0.3);
opacity{({open}) => open ? '1' : '0'};
z-index : ${({open}) => (open ?"1" : "-1")};
`;


const MobileMenuLinks = styled(LinkR)`
color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open ,setOpen] = useState(false);
  const theme = useTheme();
    return ( 
    <Nav>
        <NavContainer>
            <NavLogo to="/">
            <a 
            style={{ 
              display: "flex",
               alignItems: "center",
                color: "white",
                 marginBottom: '20',
                  cursor: 'pointer' 
                  }}>
            <DiCssdeck size="3rem" /> <Span onClick={"/"}>Portfolio</Span>
          </a>
            </NavLogo>
                <MobileIcon>
                  <FaBars 
                  onClick={() => {
                    setOpen(!open);
                  }}/>  
                   </MobileIcon>
                <NavItems>
                    <NavLink href='#about'>About</NavLink>
                    <NavLink href='#skills'>Skills</NavLink>
                    <NavLink href='#experience'>Experience</NavLink>
                    <NavLink href='#projects'>Projects</NavLink>
                    <NavLink href='#education'>Education</NavLink>
                </NavItems>
                <ButtonContainer>

                    <GitHubButton href ="https://github.com/aditiyax" target = "_blank">Github Profile</GitHubButton> 
                    <LinkedInButton  href = "https://www.linkedin.com/in/aditya-sharma-497a191b3/" target = "_blank">Linked-In Profile </LinkedInButton>
                </ButtonContainer>
                {
          open && 
            <MobileMenu open={open}>
                <MobileMenuLinks
                 href='#about'
                 onClick={() => {
                  setOpen(!open);
                }}
                >About</MobileMenuLinks>
                <MobileMenuLinks
                 href='#skills'
                 onClick={() => {
                  setOpen(!open);
                }}
                >Skills</MobileMenuLinks>
                <MobileMenuLinks
                 href='#experience'
                 onClick={() => {
                  setOpen(!open);
                }}
                >Experience</MobileMenuLinks>
                <GitHubButton
                  style = {{
                    padding :"10px 16px",
                    background : `${theme.primary}`,
                    color : "white",
                    width : "max-content",
                  }}
                  href ="/"
                  target ="_blank"
                  >
                    Github Profile
                </GitHubButton>
            </MobileMenu>
        }
        </NavContainer>
    </Nav>
    )
}

export default Navbar;