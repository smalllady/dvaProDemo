import React from 'react';
import {withRouter} from 'dva/router'
const Child = (props) => {
  const  goToIndex = ()=>{
    props.history.push('/')
  }
  return (
    <div>
      Child
      <div>
        <button onClick = {goToIndex}>go to Index</button>
      </div>
    </div>
  );
};

Child.propTypes = {
};

export default withRouter(Child);
