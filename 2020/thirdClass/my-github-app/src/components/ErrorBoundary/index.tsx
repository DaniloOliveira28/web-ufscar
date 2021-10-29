import React from 'react';
import errorGif from '../../assets/error.gif';

type HocProps = {
  // here you can extend hoc with new props
};
type HocState = {
  readonly hasError: string | null | undefined;
};

class ErrorBoundary extends React.Component<HocProps, HocState> {
  
  readonly state: HocState = {
    hasError: undefined,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: undefined };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: 'Algo deu errado' };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      // Você pode renderizar qualquer UI alternativa
      return (
        <div>
          <h1>{hasError}</h1>
          <img src={errorGif} alt='Erro' />
        </div>
        );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;