import styled from 'styled-components';

export default function Botoes(props){
    console.log("essa props")
    console.log(props);

   function finalizadoRed(){
    console.log("funciona");
    let x= props.count;
    x++;
    props.setcount(x);

    let y = props.Coryellow;
    y.push(props.id);
    props.setCoryellow=(y);
   }

   function finalizadoYellow(){
    console.log("funciona");
    let x= props.count;
    x++;
    props.setcount(x);

    let y = props.Corgreen;
    y.push(props.id);
    props.setCorgreen=(y);
   }

   function finalizadoGreen(){
    console.log("funciona");
    let x= props.count;
    x++;
    props.setcount(x);

    let y = props.Corred;
    y.push(props.id);
    props.setCorred=(y);
   }

    return(
    <Tela3 selecionados={props.selecionados}
    Corred={props.Corred}
    Coryellow={props.Coryellow}
    Corgreen={props.Corgreen}
    selecionadosResposta={props.selecionadosResposta}
    id= {props.id}>
        <p>{props.resposta}</p>
        <div>
            <ButtonRed onClick={()=>finalizadoRed()}></ButtonRed>
            <ButtonYellow onClick={()=>finalizadoYellow()}></ButtonYellow>
            <ButtonGreen onClick={()=>finalizadoGreen()}></ButtonGreen>
        </div>
    </Tela3>
    );
}

const  Tela3= styled.div`
    display:${props=>(
    !(props.Corred.includes(props.id)
    ||props.Coryellow.includes(props.id)
    ||props.Corgreen.includes(props.id)
    )&&props.selecionadosResposta.includes(props.id)
    &&props.selecionados.includes(props.id)
    )?'flex':'none'};
`
const ButtonRed = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: red;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;

`
const ButtonYellow = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: yellow;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
`
const ButtonGreen = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: green;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
`