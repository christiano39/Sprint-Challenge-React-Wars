# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS trys to make it easier to manipulate the dom and keep the state of an application. It does this by allowing the developer to use JSX instead of native javascript to create and add new elements to the DOM, and it also has built in functionality that automatically re-renders elements whenever their state or props change.

2. Describe component state.

A component state is a collection of important variables that the application relies on in order to function properly, and changes to the state need to be kept track of by React.

3. Describe props.

Props are the arguments that a component recieves from the element that is invoking it. Props are similar to state, however the props of a component only affect that particular component.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are anything that happens within a component that affect anything outside of the scope of the component. Examples include logging data to the console, calling an API, or setting an event listener on something outside of the component.