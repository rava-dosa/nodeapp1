/**
 * If present in environment get that api key or else provide a template key.
 */
module.exports=function getapikey(){
    var apiKey=process.env["x_rapidapi_key"]
    if(apiKey==undefined){
        apiKey = "916d99a3d3mshf807a0ba4721271p126592jsnf8df80851330"
    }
    return apiKey;
}