const router=require("./router")
const cache=router.cache;

async function updateAnalysis(keyJson,headers,BASE_URL){
    json=await requestHelper(cache,headers,BASE_URL,"/stock/v2/get-analysis",keyJson)
    console.log(`Updated ${JSON.stringify(keyJson)} -> ${json["status"]}`)
}
async function updateNews(keyJson,headers,BASE_URL){
    json=await requestHelper(cache,headers,BASE_URL,"/stock/get-news",keyJson)
    console.log(`Updated ${JSON.stringify(keyJson)} -> ${json["status"]}`)
}

module.exports =async function update(){
    myKeys = cache.keys();
    for(var x=0;x<myKeys.length;x++){
        data=JSON.parse(mykeys[x])
        if(data["symbol"]!=undefined && data["region"]!=undefined){
            await updateAnalysis(data,router.getHeader(),router.BASE_URL);
        }else if(data["category"]!=undefined && data["region"]!=undefined){
            await updateNews(data,router.getHeader(),router.BASE_URL);
        }
    }
    console.log("Cache Refreshed");
}