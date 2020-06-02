import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { mokeData } from '../services/example'
import { connect } from 'dva';


function IndexPage(props) {
  const changeName = () => {
    props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: 'lisi'
      }
    })
  }
  const changeNameAsync = () => {
    props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name: 'lisi'
      }
    })
  }
  useEffect(() => {
    // mock 数据
    mokeData().then(res => {
      console.log(res,8989);
    })

  }, [])
  useEffect(() => {
    props.dispatch({
      type: 'indexTest/getCnode',
    })
  }, []);
  return (
    <div>
      hello index: {props.name}
      <p>
        <button onClick={changeName}>changeName</button>
        <button onClick={changeNameAsync}>changeNameAsync</button>
      </p>
      <ul>
        {
          props.cNodeData.map((item, index) => {
            return (
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
  name: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => {
  return {
    name: state.indexTest.name,
    cNodeData: state.indexTest.cNodeData,
  }
}
export default connect(mapStateToProps)(IndexPage);
