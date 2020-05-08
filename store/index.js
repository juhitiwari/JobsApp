import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { autoRehydrate, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';



const store=createStore(
    reducers,
    {},
    compose(
    applyMiddleware(thunk),
    autoRehydrate()
    )
    
)
persistStore(store,{storage:AsyncStorage,whitelist:['likeJob']})

export default store;