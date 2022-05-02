import React, { useState } from "react";

export default function Card(props){
    return (
        <div className="card--container">
            <h1 className="card--nome">{props.name}</h1>
            <p className="card--sobrenome">{props.sobrenome}</p>
            <p className="card--dataNascimento">{props.dataNascimento}</p>
            <p className="card--cpf">{props.cpf}</p>
            <p className="card--dataCriacao">{props.dataCriacao}</p>
            <p className="card--dataUltimaAtualizacao">{props.dataUltimaAtualizacao}</p>
        </div>
    )
}