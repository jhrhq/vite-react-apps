import React from "react";

const QuestonAnser = () => {
  return (
    <div>
      <h2>How does react work?</h2>
      <p>
        React maintains a tree and uses a virtual DOM to update the regular DOM.
        It creates a list of changes that need to be made to the actual DOM and
        compares with the virtual DOM it created, then update it to the actual
        DOM. React data is unidirectional means its data flows only one way and
        it flows downwards.
      </p>
      <h2>Different between props and state</h2>
      <p>State is a variable and managed by the component</p>
      <p>
        A state of a component often becomes props of its child components. Then
        that props can not be changed cause it is read only
      </p>
      <p>
        We use state to store the data and send it as props.And state is mutable
      </p>
    </div>
  );
};

export default QuestonAnser;
