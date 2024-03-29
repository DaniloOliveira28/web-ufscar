import React, { Component } from 'react';

import './App.css';

class LifeCycle extends Component {
  state = {
      name: ''
  }

  constructor(props) {
    super(props); //https://overreacted.io/pt-br/why-do-we-write-super-props/
    console.log('>>> Constructor')
    this.state = { name: props.name };
    /*
    • chamado antes de ser montado.
    • inicializar estados locais.
    • realizar o bind dos eventos.*/
  }

  static getDerivedStateFromProps(props, state) {
    console.log('>>> getDerivedStateFromProps ')
    return null;
    /*
    • chamado antes de ser montado.
    • transformar os props
    • usar com cuidado! */
  }

  componentDidMount(){
    console.log('>>> componentDidMount ')
    /*
    • invocado depois que um componente é construído.
    • carregar dados remotamente.
    */
  }

  shouldComponentUpdate(nextProps) {
    console.log('>>> shouldComponentUpdate')
    return true;
    /* 
      invocado antes da renderização quando novos props ou  estados estão sendo recebidos. Por padrão é 'true'*/
  }

  componentDidUpdate(){
    console.log('>>> componentDidUpdate ');

    /*
    • invocado imediatamente depois que ocorrer uma ação
    */
  }

  componentWillUnmount() {
    console.log('>>> componentWillUnmount ')
     /*
    • invocado imediatamente antes do componente estiver desmontado.
    */
  }
  render() {
    console.log('>>> render ');
    return (
      <div style={
        {
          border: '1px solid red'
        }
      }>
        <section>
          <header>
            <h3> LifyCycle </h3>
          </header>
          <div>
          <p> {`Open your console ${this.state.name}`} </p>
          <p> {`Open your console ${this.props.name}`} </p>
          </div>
        </section>
      </div>
    );
  }
}

export default LifeCycle;