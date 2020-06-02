import {textCnode} from '../services/example'

export default{
  namespace:'indexTest',
  state:{
    name:'zhangsan',
    cNodeData:[],
    msg:''
  },
  reducers:{
    setName(state,payload){
      let newState = JSON.parse(JSON.stringify(state))
      newState.name = payload.data.name
      return newState
    },
    getNodeData(state,payload){
      let newState = JSON.parse(JSON.stringify(state))
      newState.cNodeData = payload.data
      return newState
    },
    testPath(state,payload){
      let newState = JSON.parse(JSON.stringify(state))
      newState.msg = payload.title
      return newState
    }
  },
  effects:{
    *setNameAsync({ payload }, { put, call }) {
      // put 传的是action  call 是接口
      yield put({ type: 'setName', data:{name:'6666'}});
    },
    *getCnode({payload},{call,put}){
     let res = yield call(textCnode);
     if(res.data){
      yield put({type:"getNodeData",data:res.data.data})
     }
    }
  },
  subscriptions:{
    test({dispatch,history}){
      console.log(history);
      history.listen(({pathname})=>{
        if(pathname==='/user'){
          dispatch({
            type:'testPath',
            title:'欢迎进入user页面'
          })
        }
      })
    }
  }
}