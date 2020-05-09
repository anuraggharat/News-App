const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=741f9880a09c4895b6a87559756e587c"

export async function getHeadLines(){
    let result = await fetch(url).then(response=>response.json())
    return result.articles;
}