import React, { useState, useEffect, memo } from 'react';


const LifeCycle = props => {
  const [name, setName] = useState(props.name); //there is no need for constructor


  const [prevName, setPrevName] = useState(null);


  if (props.name !== prevName) {
    // Name change since last render. Update name state.
    // setName(props.name);
    // setPrevName(props.name);
      console.log('>>> getDerivedStateFromProps ')
  }

  useEffect(() => {
    console.log('>>> componentDidMount ');
    return () => {
      console.log('>>> componentWillUnmount ');
    }
  }, []);

  useEffect(() => {
    console.log('>>> componentDidUpdate');
  }, [props]);

  console.log('>>> render');

  return (
    <div>
      <section>
        <header>
          <h3> LifyCycle </h3>
        </header>
        <div>
          <p> {`Open your console`} </p>
          <p> {`props.name: ${props.name}`} </p>
          <p> {`name: ${name}`} </p>

        </div>
      </section>
    </div>
  );
}


export default  memo(
  LifeCycle,
  // Notice condition is inversed from shouldComponentUpdate
  (prevProps, nextProps) => {
    console.log('>>> shouldComponentUpdate');

    return nextProps.name === prevProps.name}
)