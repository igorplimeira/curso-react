import './App.css';
import React from 'react';
import react from 'react';

class App extends React.Component {

  state = {
    nome : ''
  }

/*

  constructor(){
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }
  modificarNome(event){
    this.setState({
      nome: event.target.value
    })
  }
*/

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["Igor", "Stephanny", "Tânia"]
    const comboBoxOpcoes = opcoes.map (opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){

    const MeuComboBox = () => this.criaComboBox()

    return (
      <react.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>{this.state.nome}</h1>
        <MeuComboBox/>
      </react.Fragment>
    )
  }
}

export default App;
