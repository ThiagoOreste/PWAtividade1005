import React from 'react';

const Caixa = () => {
    return(
        <>
            <div className="container"></div>
        </>
    )
}

const Imagem = () => {
    return(
        <>
            <div className="imagem">
                <img scr="../img/pogchamp.jpg" alt=":O"/>
            </div>
        </>
    )
}

const Label = () =>{
    return(
        <>
            <div className="label">
                <label for="xd">XD</label>
            </div>
        </>
    )
}

const TextField = () =>{
    return(
        <>
            <div className="textfield">
                <input type="text"/>
            </div>
        </>
    )
}

const Text = () =>{
    return(
        <>
            <div className="text">
                <p>Tudo Flui, nada permanece ~ de Efeso, Heráclito 535 - 475 a.C.</p>
            </div>
        </>
    )
}

const Botao = () =>{
    return(
        <>
            <div className="botao">
                <button type="button">Enviar</button>
                <button type="button">Exluir</button>
            </div>
        </>
    )
}

export default Caixa
export {Imagem, Label, TextField, Text, Botao}