import React from "react";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";

import './app.css'


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Avatar from "./components/UI/Avatar/Avatar"
import Title from "./components/UI/Title/Title"
import Descr from "./components/UI/description/Descr"
import Range from "./components/UI/Range/Range";

import { ReactComponent as MailIcon } from './assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg'


const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () => {
    const [skillsCounter, setSkillsCounter] = React.useState(1)
    const [worksCounter, setWorksCounter] = React.useState(1)

    const componentRef = React.useRef()
    const handlePrintClick = useReactToPrint({
      content: () => componentRef.current,})



  
    return ( 
    <div className="ui-wrapper">
    <Header onClick={handlePrintClick}/>
    <div class="ui-content-wrapper">
      <Wrapper ref={componentRef}>
        <div className="ui-content">
        <Row itemsCenter>
          <Sidebar>
            <Avatar/>
          </Sidebar>
            <Content>
              <Title> ФИО:</Title>
              <Descr>
                о себе:
              </Descr>
            </Content>
        </Row>

        <Row>
          <Sidebar>
                <Title size="3">дополнительно:</Title>
                <Descr>обладаю навыками фотошопа</Descr>
                <Descr isSecondary>Гомель Беларусь</Descr>

                <Descr isPrimary style={{ marginTop: '2rem'}}> 
                <MailIcon style={{marginRight: '0.6rem'}}/> тут почта</Descr>
                <Descr isPrimary>
                  <PhoneIcon style={{marginRight: '0.6rem'}}/> тут мобильный номер</Descr>
          </Sidebar>

          <Content>
                < Title size="3">Образование</Title>
                <Descr>Школа, университет </Descr>

                < Title size="3"
                isShowButton 
                onClick = {() => setWorksCounter(worksCounter + 1)} 
                style={{marginTop: '3.6rem'}}>
                  опыт работы:</Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                <Descr key={i}>{i + 1}.работал</Descr>) )}
                

                < Title size="3" 
                isShowButton 
                onClick = {() => setSkillsCounter(skillsCounter + 1)}
                style={{marginTop: '3rem'}}>
                 Навыки, знания:                  
                </Title>

                  {new Array(skillsCounter).fill(1).map((_, i) => (<Range key ={i} />))}

           </Content>
          </Row>
          </div>
       </Wrapper>
      </div>
    <Footer/>
  </div>
  );
};
export default App;