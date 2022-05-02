import React, {useState, useEffect} from "react"
import Axios from "axios"
import './App.css';
import Card from "./components/card";

function App() {
  
  const [values, setValues] = useState();
  const [listUsers, setListUsers] = useState();

  console.log(listUsers);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleCreate = () => {
    Axios.post("http://localhost:3001/users", {
      email: values.email,
      nome: values.nome,
      sobrenome: values.sobrenome,
      dataNascimento: values.dataNascimento,
      cpf: values.cpf,
      dataCriacao: values.dataCriacao,
      dataUltimaAtualizacao: values.dataUltimaAtualizacao,
    }).then((response => {
      console.log(response);
    }))
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/users")
      .then((response) => {
        setListUsers(response.data);
      })
  }, [])

  return (
    <div className="app--container">
      <div className="create--container">
        <h1 className="create--title">Create User</h1>
        <input 
          type="text"
          name="email"
          placeholder="Email"
          className="create--input"
          onChange={handleChangeValues}>
        </input>
        <input 
          type="text"
          name="nome"
          placeholder="Nome"
          className="create--input"
          onChange={handleChangeValues}>
        </input>
        <input 
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          className="create--input"
          onChange={handleChangeValues}>
        </input>
        <input 
          type="date"
          name="DataNascimento"
          className="create--input"
          onChange={handleChangeValues}>
        </input>
        <input 
          type="number"
          name="cpf"
          placeholder="CPF"
          className="create--input"
          onChange={handleChangeValues}>
        </input>
        <button className="create--button" onClick={() => handleCreate()}>Create</button>
      </div>
        {typeof listUsers !== "undefined" && listUsers.map((value => {
          return (
            <Card 
              key={value.id} 
              listCard={listUsers} 
              setListCard={setListUsers} 
              id={value.id} 
              email={value.email} 
              nome={value.nome}
              sobrenome={value.sobrenome}
              dataNascimento={value.dataNascimento}
              cpf={value.cpf}
              dataCriacao={value.dataCriacao}
              dataUltimaAtualizacao={value.dataUltimaAtualizacao}
            ></Card>
          );
        }))}
    </div>
  );
}

export default App;