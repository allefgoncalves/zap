import seta_play from './assets/seta_play.png';
import seta_virar from './assets/seta_virar.png';
import styled from 'styled-components';
import Botoes from './Botoes';
import { useState } from 'react';

export default function Perguntas({CARDS, count, setcount}) {
    const [selecionados, setselecionados] = useState([]);
    const [selecionadosResposta, setselecionadosResposta] = useState([]);
    const [Corred, setCorred] = useState([]);
    const [Coryellow, setCoryellow] = useState([]);
    const [Corgreen, setCorgreen] = useState([]);
   

    console.log(CARDS);

    function play(id){
        if(!selecionados.includes(id)){
            setselecionados([...selecionados,id]);
        }
    }

    function virar(id){
        if(!selecionadosResposta.includes(id)){
            setselecionadosResposta([...selecionadosResposta,id]);
        }
    }

    function define(){
        if(props.Corred.includes(props.id))
            return(erro);
        
        if(props.Corred.includes(props.id))
            return(quase);

        if(props.Corred.includes(props.id))
            return(certo);
    }
    
    return(
        <lu>
           {CARDS.map((pergunta)=>(
            <Card key={pergunta.question}>
                <Button1 selecionados={selecionados} id={pergunta.id}>
                   
                    <p>pergunta {pergunta.id}</p>
                    <button onClick={()=>play(pergunta.id)}><img src={seta_play}/></button>
                
                </Button1>
                <Button2 id={pergunta.id} 
                selecionados={selecionados}
                selecionadosResposta={selecionadosResposta}
                >
                    
                    <p>{pergunta.question}</p>
                    <button onClick={()=>virar(pergunta.id)}><img src={seta_virar}/></button>
                </Button2>   
                   
                <Botoes count={count} setcount={setcount}
                    selecionadosResposta={selecionadosResposta}
                    selecionados={selecionados}
                    id={pergunta.id} resposta={pergunta.answer}
                    Corred={Corred} setCorred={setCorred}
                    Coryellow={Coryellow} setCoryellow={setCoryellow}
                    Corgreen={Corgreen} setCorgreen={setCorgreen}
                />

                <Tfinal
                    Corred={Corred} setCorred={setCorred}
                    Coryellow={Coryellow} setCoryellow={setCoryellow}
                    Corgreen={Corgreen} setCorgreen={setCorgreen}
                >
                    <p>pergunta {pergunta.id}</p>
                    <img src={()=>define()} ></img>

                </Tfinal>
                
            </Card> 
           
           ))}    
        </lu>
    );
}

const Tfinal =styled.div`
    display: ${props => props.Corred.includes(props.id)
    ||props.Coryellow.includes(props.id)
    ||props.Corgreen.includes(props.id)?'flex':'none'}
`
const Button2 = styled.div`
    display: ${props => props.selecionados.includes(props.id)
    &&!props.selecionadosResposta.includes(props.id)? 'flex': 'none'};
`
const Button1 =styled.div`
    display: ${props => props.selecionados.includes(props.id)? 'none': 'flex'};
    button{
        width: 20px;
        height: 23px; 
    }
`
const Card =styled.li`
    width: 300px;
    height: 65px;   
    border-radius: 5px;
    background-color: white;
    list-style-type: none;
    margin:10px;
`
