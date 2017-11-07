'use strict';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {maang : ['Android', 'IOS', 'NodeJS']};
  },

  render() {
    return (
      <div>
        {this.state..maang.map((e, i) => <Note key={i}>{e}</Note>)}
      </div>
    )
  }
};

module.exports = List;
