import React, { Component } from 'react';

class FocusMeOnPageLoad extends Component {
  constructor(props) {
    super(props);
    this.component = React.createRef();
  }

  componentDidMount() {
    this.component.current.focus();
  }

  render(props) {
    return (
      <div tabIndex="-1" ref={this.component}>
        {this.props.children}
      </div>
    );
  }
}

export default FocusMeOnPageLoad;
