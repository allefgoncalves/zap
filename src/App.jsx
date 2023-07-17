import { useState } from 'react';
import styled from 'styled-components';
import Perguntas from './Perguntas';
import logo from './assets/logo.png';
import CARDS from './CARDS';

export default function App() {
  const [count, setcount] = useState(0);

  return (
    <Conteiner>
      <Logo>
        <img src={logo}/>
        <div>ZapRecall</div>
      </Logo>
      <Perguntas CARDS={CARDS} count={count} setcount={setcount}/>
      <Baseboard>
        {count}/4
      </Baseboard>
    </Conteiner>
  );
}

const Baseboard =styled.div`
  width: 375px;
  height: 70px;
  background-color: #FFFF;
  border: 1px solid #dbd8d8 ;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -4px 6px 0px #0000000D;

`

const Conteiner = styled.div`
  background-color:#FB6B6B;
  width: 375px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Logo =styled.div`
  width: 255px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  margin: 40px auto;
  img{
    width: 52px;
    height: 60px;
  }
 `


