'use strict';

class Note extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button>DELETE</button>
      </div>
    )
  }
};

module.exports = Note;
