import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom"

export class AllCreditor extends React.Component {
    constructor(props) {
      super(props);
        
    }

    render () {
        return (
          <div></div>
        )
    }

}

const mapState = (state) => {
    return {
              
    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState, mapDispatch)(AllCreditor)