import React from 'react'
import styled from 'styled-components'
import _default from '../../themes/default';
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;


const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;


@media (max-width: 960px) {
    flex-direction: column;
}
`;


export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color :{#000000}
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;


export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color :{#000000}    
      @media (max-width: 768px) {
        font-size: 16px;
    }
`;


 const Divider = styled.div`
width: 1.5px;
background: ${({ theme }) => theme.primary};
`;


 const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-gap: 32px;
// grid-auto-rows: minmax(100px, auto);
// @media (max-width: 960px) {
//     grid-template-columns: repeat(2, 1fr);
// }
// @media (max-width: 640px) {
//     grid-template-columns: repeat(1, 1fr);
// }
`;



const Projects = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
        <Wrapper>
      <Title>Projects</Title>
      <Desc>Here are some of my Projects that Have helped me grow my expertise and get hands-on experience in the following domains</Desc>
     
     <CardContainer>
          { projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
