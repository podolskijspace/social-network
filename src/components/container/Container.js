import React, {Component} from "react";
import './container.scss'

export default class Container extends Component {
  
  render () {
    const mod = this.props.mod ? this.props.mod : "";

    return (
      <div className={"container " + mod}>
        {this.props.children}
      </div>
    )

  }
}