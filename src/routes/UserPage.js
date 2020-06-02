import React, { Component } from 'react'
import {connect} from 'dva'
import { Link } from 'dva/router';
import Child from '../components/Child'
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push('/')
  }
  render() { 
    return ( 
      <div>
           {this.props.msg}<br/>
           <Link to="/">首页</Link><br/>
           <button onClick={this.handleClick}>跳转到首页</button>
           <Child/>
      </div>
     );
  }
}
const mapStateToProps = (state) => {
  return {
    msg: state.indexTest.msg
  }
} 
export default connect(mapStateToProps)(UserPage);