import React from 'react';
import ReactDOM from 'react-dom';
//import { browserHistory } from 'react-router';

import Header from './components/Header';
import App from './pages/App';
import Footer from './components/Footer';
import Exp from './components/Exp';

import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Michele',
  lastName: 'Davison'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// it is safe to embed user input in JSX - JSX escapes any values, 
// everything is converted to a string before rendering
const title = "response.potentiallyMaliciousInput";
// This is safe:
const element2 = <h1>{title}</h1>;

const element3 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// JSX tags may contain children
const element8 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
// Babel compiles JSX to React.createElement calls
// const element4 = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
const element4 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// The object that React.createElement() makes, i.e. a React Element, is something like this
// Note: this structure is simplified
// You can think of is as a description of what you want to see on screen
const element5 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};

// Hello world below is simplest React example
// Include JS with curly braces
function tick() {
  const element6 = (
    <div>
      <h1>Hello, world!</h1> 
      <h2>
        It is{' '}
        {new Date().toLocaleTimeString()}.
      </h2>
    </div>
  );
}


const element7 = <Exp name="Alan" />;

// This "Functional Component" is the same
function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}
// As this
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

// Take this
function Comment1(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
// Extract Avatar component
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}
// To get this
function Comment2(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
// Now extract UserInfo component
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
// To get this
// A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), 
// or is complex enough on its own (App, FeedStory, Comment), 
// it is a good candidate to be a reusable component.
function Comment3(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment1 = {
  date: new Date(),
  text:
    'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/g/64/64',
  },
};
const comment3 = {
  date: new Date(),
  text:
    'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/g/64/64',
  },
};

// Whether you declare a component as a function or a class, it must never modify its own props. 
// All React components must act like pure functions with respect to their props.
// “pure” = they do not attempt to change their inputs & always return the same result for the same inputs.

// Could have put plain "element," instead of the <div></div> if that was the only element
 
// From this
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
// 
// You can convert a functional component like Clock to a class in five steps:
// 1 Create an ES6 class, with the same name, that extends React.Component.

// 2 Add a single empty method to it called render().

// 3 Move the body of the function into the render() method.

// 4 Replace props with this.props in the render() body.

// 5 Delete the remaining empty function declaration.
// 
// To this
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// 
We will move the date from props to state in three steps:

// 1 Replace this.props.date with this.state.date in the render() method:
// 2 Add a class constructor that assigns the initial this.state:
// 3 Remove the date prop from the <Clock /> element:
// 
// To this
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// To This
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


ReactDOM.render(
	<div>
		<Clock />
		<Comment3 
		    date={comment3.date}
    		text={comment3.text}
    		author={comment3.author}
		/>
		{element7}
		<Exp name = "Michele" />
		<Header />
  		<App />
  		<Footer />
	</div>,
  	document.getElementById('root')
);