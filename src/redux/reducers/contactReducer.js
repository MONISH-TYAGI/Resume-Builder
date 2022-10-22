import * as contactActions from '../actions/actions'
import initialState from './initialState.json'
const contactReducer=(state=initialState.document,action)=>{
    switch(action.type)
    {
        case contactActions.SET_CONTACT:return {...action.payload}
        case contactActions.UPDATE_CONTACT:return {...action.payload}
        default:return state
    }
}
export default contactReducer;