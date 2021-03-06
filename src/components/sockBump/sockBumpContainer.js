import React, { Component } from 'react';
import SockBumpForm from './sockBumpForm.js'
import SockBumpList from './sockBumpList.js'
import { createBump, fetchBumps, selectBump, deleteBump } from '../../actions/sockBumps.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SockBumpContainer extends Component{
  componentDidMount(){
    this.props.fetchBumps()
  }
  render(){
    return(
      <div className="sock-bump-container">
        <div style={{"padding": "5%"}}>
        <h4>Add Bump Map:</h4>
        <SockBumpForm createBump={this.props.createBump}/>
        </div>
        <div style={{"padding": "5%"}}>
        <h4>Select Bump Map:</h4>
        <SockBumpList sockBumps={this.props.sockBumps} selectBump={this.props.selectBump} selectedBump={this.props.selectedBump} deleteBump={this.props.deleteBump}/>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return({
    sockBumps: state.sockBumps,
    selectedBump: state.selectedBump
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createBump: createBump,
    fetchBumps: fetchBumps,
    selectBump: selectBump,
    deleteBump: deleteBump,
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(SockBumpContainer)
