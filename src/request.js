const fetch = require("node-fetch");
const {URLSearchParams} = require('url')

/**
 * @param {string} url
 * @param {Object} headers
 * @param {Object} query 
 * This function makes a get request with provided attributes
 */
module.exports= async function sendGetRequest(headers,url,query){
    
    const paramString = new URLSearchParams(query).toString();
    const finalUrl=`${url}?${paramString.toString()}`;
    console.log(finalUrl)
    console.log(headers)
    try{
        const response = await fetch(finalUrl,{
            method:'GET',
            headers:headers
        });
        var jsonData = await response.text();
        json=JSON.parse(jsonData);
        console.log(typeof(json));
        json["status"]=200
        return json;
    }catch(errorx){
        console.log(errorx);
        error={"status":500}
        return error;
    }
}