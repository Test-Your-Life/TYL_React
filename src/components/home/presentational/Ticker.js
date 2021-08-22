import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/sass/main.css';

class NewsTicker extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.state = {
      speed: this.props.speed,
      items: this.props.children,
    };

    //this.element = React.createRef();
  }

  componentDidMount() {
    this.init();
  }

  init() {
    this.element.current.style.height = `${this.props.rowHeight * this.props.maxRows}px`;
    this.element.current.style.overflow = `hidden`;

    this.startInterval();
  }

  startInterval() {
    this.setState({
      moveInterval: setInterval(() => this.moveUp(), this.props.duration),
    });
  }

  async _handleUpAnimation(newList) {
    const firsLiEl = this.element.current.children[0];

    // First element will go up rowHeight px in speed ms
    setTimeout(
      () =>
        (firsLiEl.style.cssText = `margin: -${this.props.rowHeight}px 0 0 0; transition: all ${this.props.speed}ms;`),
      0,
    );

    // Wait for speed ms and send first element to end of the list.
    // After that get first list element back to margin 0.
    await new Promise(() =>
      setTimeout(async () => {
        newList.shift();
        await this.setState({ items: newList });
        firsLiEl.style.cssText = 'margin: 0';
      }, this.props.speed),
    );
  }

  async moveUp() {
    const itemsCopy = [...this.state.items];
    itemsCopy.push(itemsCopy[0]);

    await this._handleUpAnimation(itemsCopy);
  }

  render() {
    return (
      <ul className="nt-title" ref={this.element}>
        {this.state.items.map((item, index) => (
          <div className="nt-tilte" key={index}>
            {item}
          </div>
        ))}
      </ul>
    );
  }
}

NewsTicker.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  speed: PropTypes.number,
};

NewsTicker.defaultProps = {
  children: [],
  speed: 400,
};
export default NewsTicker;
