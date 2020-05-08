import { combineReducers } from "redux";
import auth from './auth_reducer'
import jobs from './jobs_reducer'
import likeJob from './likes_reducer'
import clearLikedJobs from './likes_reducer'





export default combineReducers({
    auth,jobs,likeJob,clearLikedJobs
})


