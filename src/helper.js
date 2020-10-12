//this file contains helper function

const request = require('./request')
const router = require('./router')
/**
 * 
 * @param {Object} myCache 
 * @param {Object} headers 
 * @param {string} BASE_URL 
 * @param {string} subUrl
 * @param {Object} keyJson 
 * 
 * This function makes a request and store it in cache.
 */
module.exports=async function requestHelper(myCache,headers,BASE_URL,subUrl,keyJson){
    try{
        value=myCache.get(key)
        if(value==undefined){
            json=await request(headers,BASE_URL+subUrl,keyJson);
            json["timeStamp"]=Math.round(+new Date()/1000);
            if(json['status']==200){
                myCache.set(key,json,router.cacheTTL);
            }
            return json;
        }else{
            return value;
        }
    }catch(error){
        console.log(error)
        console.log(`router/${subUrl} failed`)
        return {"status":500}
    }
}