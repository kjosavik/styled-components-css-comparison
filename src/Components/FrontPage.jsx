import React from "react";
import styled, {withTheme} from "styled-components";
import WithStyledComponent from './WithStyledComponents';
import WithoutStyledComponents from "./WithoutStyledComponents";
import kwLogo from '../assets/kodeworks.svg'
import mLogo from '../assets/medium.svg'
import CodeHolder from "./CodeHolder";



export default withTheme( props => (
  <Body>

    <Header>

      <Left>
        <Logo>Styled Components Demo</Logo>
      </Left>

      <Right>
        <Link href={'https://kodeworks.no'}>
          <Kodeworks src={kwLogo}/>
        </Link>
        <Link href={'https://medium.com/@erik.kjosavik/try-styled-components-in-your-next-react-project-849a9048eea6'}>
          <Medium src={mLogo} />
        </Link>
      </Right>

    </Header>


    <Content>

      <Left>
        <WithStyledComponent />
        <CodeHolder id={'29bb49aa9cde7e1b7705541e77af2922'}/>
      </Left>
      
      <Right>
        <WithoutStyledComponents />
        <CodeHolder id={'d1502ea25a92d5134f34b2bf77b8f109'}/>
        <CodeHolder id={'f020c42d9590459f49b10daeb872d05b'}/>
      </Right>

    </Content>

  </Body>
  ));
const Body = styled.div`
  
`;

const Header = styled.div`
  height: ${props => props.theme.size.l};
  background-color: ${props => props.theme.color.orange};
  padding: ${props => props.theme.size.s};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div``;

const Logo = styled.span`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.size.m};
  font-weight: 500;
  transition: 0.4s;
  cursor: default;
  :hover {
    color: black;
    font-size: calc(${props => props.theme.size.m} + 2px);
  }
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:visited {
    color: inherit;
  }
  :first-child {
    margin-right: ${props => props.theme.size.s};
  }
  & > * {
    height: ${props => props.theme.size.s};
  }
`;

const Kodeworks = styled.img``;

const Medium = styled.img``;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: ${props => props.theme.size.l};
`;