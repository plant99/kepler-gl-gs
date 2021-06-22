
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';

import {requestAddPermission, getAllRoles, triggerMagicLogger} from '../actions';

class MagicButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <Button onClick={() => {
        this.props.dispatch(triggerMagicLogger());
     }}>
         Magic Button
     </Button>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  state: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    // ... normally is an object full of action creators
    dispatch
  }

}

// We normally do both in one step, like this:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicButton);
