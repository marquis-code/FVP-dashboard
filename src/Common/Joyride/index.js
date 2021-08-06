import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactJoyride, { EVENTS } from 'react-joyride';
import './styles.css';

class Basic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      steps: [
        {
          content: (
            <React.Fragment>
            This is the farming management platform. Get high quality inputs, information and resources to manage  your farm here
            </React.Fragment>
          ),
          placement: 'center',
          locale: { skip: 'Skip' },
          target: 'body',
        },
        {
          content: (
            <React.Fragment>
          This is the farming vendor platform- Get access to customers and live data on your produce that's being sold on here
            </React.Fragment>
          ),
          placement: 'bottom-start',
          styles: {
            options: {
              width: 900,
            }
          },
          target: '.demo__projects h2',
          title: 'Our projects',
        }
      ],
    };
  }

  static propTypes = {
    joyride: PropTypes.shape({
      callback: PropTypes.func,
    }),
  };

  static defaultProps = {
    joyride: {},
  };

  handleClickStart = (e) => {
    e.preventDefault();

    this.setState({
      run: true,
    });
  };

  handleJoyrideCallback = (data) => {
    const { joyride } = this.props;
    const { type } = data;

    if (type === EVENTS.TOUR_END && this.state.run) {
      // Need to set our running state to false, so we can restart if we click start again.
      this.setState({ run: false });
    }

    if (typeof joyride.callback === 'function') {
      joyride.callback(data);
    } else {
      console.group(type);
      console.log(data); //eslint-disable-line no-console
      console.groupEnd();
    }
  };

  render() {
    const { run, steps } = this.state;

    return (
      <div className="demo-wrapper">
        <ReactJoyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          run={run}
          steps={steps}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
          callback={this.handleJoyrideCallback}
        />

        <div className="demo__section demo__hero">
          <div>
            <h1>Create walkthroughs and guided tours for your ReactJS apps.</h1>
            <button onClick={this.handleClickStart} className="text-black">Let's Go!</button>
          </div>
        </div>
        <div className="demo__section demo__projects">
          <h2>OUR PROJECTS</h2>
        </div>
      </div>
    );
  }
}

export default Basic;
