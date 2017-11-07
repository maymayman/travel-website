'use strict';

const List = require('./components/List');

class Hello extends React.Component {
  render() {
    return
  }
};

ReactDOM.render(<Hello/>, document.getElementById('root'));

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// let Controller = {};

// Controller.formatDate = function() {
//   let date = new Date();
//   return date.toLocaleTimeString();
// };

// class Comment extends React.Component {


//   render() {
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <img className="Avatar" src={this.props.author.avatarUrl} alt={this.props.author.name} />
//           <div className="UserInfo-name">
//             {this.props.author.name}
//           </div>
//         </div>
//         <div className="Comment-text">
//           {this.props.text}
//         </div>
//         <div className="Comment-date"> It is
//           {this.props.date.toLocaleTimeString()}
//         </div>
//       </div>
//     )
//   }
// };

// Controller.tickTockRender = function() {
//   console.log(1);
//   ReactDOM.render(
//     <Comment
//       date={new Date()}
//       text={comment.text}
//       author={comment.author} />,
//     document.getElementById('root')
//   );
// };

// setInterval(Controller.tickTockRender, 1000);


// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
