import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return <span>Something went wrong.</span>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;