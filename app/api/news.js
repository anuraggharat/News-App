import axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=741f9880a09c4895b6a87559756e587c";

export async function getHeadLines() {
  let result = await axios.get(url);
  //console.log(result);
  return result.data.articles;
}

export async function getSearchNews(search) {
  let result = await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=741f9880a09c4895b6a87559756e587c`
  );
  //console.log(result);
  return result.data.articles;
}
