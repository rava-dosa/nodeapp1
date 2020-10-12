const NodeCache = require( "node-cache" );
const requestHelper = require('./helper')
const getApikey = require('./config')
const myCache = new NodeCache();
const cacheTTL = 700
const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com"
// const BASE_URL = "http://localhost:8081"

/**
 * By default 700, move it to config.js
 */
module.exports.cacheTTL=cacheTTL;
/**
 * By default https://apidojo-yahoo-finance-v1.p.rapidapi.com, move it to config.js
 */
module.exports.BASE_URL=BASE_URL;
/**
  move it to config.js
 */
module.exports.getHeader=function getHeader(){
    headers={
        "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key":`${getApikey()}`,
        "useQueryString":true
    }
    return headers;
}
/**
 * @param {Object} query
 * services /stock/v2/get-analysis
 */
module.exports.getAnalysisHelper= async function getAnalysisHelper(query){
    keyJson={}
    keyJson['region']=query['region']
    keyJson['symbol']=query['symbol']
    //add checks
    key=JSON.stringify(keyJson)
    json=await requestHelper(myCache,this.getHeader(),BASE_URL,"/stock/v2/get-analysis",keyJson)
    return json;
}
/**
 * @param {Object} query
 * services /stock/v2/get-news
 */
module.exports.getNewsHelper= async function getNewsHelper(query){
    keyJson={}
    keyJson['region']=query['region']
    keyJson['category']=query['category']
    //add checks
    key=JSON.stringify(keyJson)
    json=await requestHelper(myCache,this.getHeader(),BASE_URL,"/stock/get-news",keyJson)
    return json;
}

module.exports.cache=myCache;
