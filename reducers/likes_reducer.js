import {LIKE_JOB,CLEAR_LIKED_JOBS} from '../actions/types'
import _ from 'lodash'
import {REHYDRATE} from 'redux-persist/lib/constants';


const INITIAL_STATE={
    results:[]
}

export default function(state=[],action){
    switch(action.type){

    case REHYDRATE:
        return action.payload.likeJob||[]

    case LIKE_JOB:
          //  return _.uniqBy([
            //  resultsaction.payload,...state
            //],state.id)
    let index = state.findIndex(el => el.id == action.payload.id);

    if(index == -1)
        return [...state, action.payload]
    return state

    case CLEAR_LIKED_JOBS:
        return {state:[]}


        default:
            return state

    }
}