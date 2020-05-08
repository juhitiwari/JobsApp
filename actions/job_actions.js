import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'
import Geocoder from 'react-native-geocoding';


import {
    FETCH_JOBS,
    LIKE_JOB,
    CLEAR_LIKED_JOBS

} from './types'

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?';
const JOB_QUERY_PARAMS = {
//  description: 'javascript'
};

const getJobsLonLat = jobs => {
    Geocoder.init("AIzaSyCfcR0CiaMAqpc3e8_89D3sd6kEzBq2dFQ")
    return jobs.map(job => {
      return Geocoder.from(job.location).then(
        json => {
          const tempJob = {
            ...job, 
            longitude: json.results[0].geometry.location.lng, 
            latitude: json.results[0].geometry.location.lat 
          };
          return tempJob;
        },
      error => {
        console.log(error);
      });
    });
  };

const buildJobsUrl = (region) => {
    const { latitude, longitude } = region;
    let query;
   
    query = qs.stringify({ ...JOB_QUERY_PARAMS, lat: latitude, long: longitude });
    
    return `${JOB_ROOT_URL}${query}`;
   };

export const fetchJobs=(region,callback)=>async (dispatch)=>{
    try{
   //let zip=await reverseGeocode({region})
    const url=buildJobsUrl(region)
    let {data}=await axios.get(url)
   
        dispatch({type:FETCH_JOBS,payload:data})
        callback()

    
    
    }catch(e){
        console.error(e)
    }


    }

export const likeJob=(job)=>{
    return {
        payload:job,
        type:LIKE_JOB
    }
}

export const clearLikedJobs=()=>{
    return{
        type:CLEAR_LIKED_JOBS
    }
}