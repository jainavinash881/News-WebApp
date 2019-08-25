
const key = "5f0aefc110cf49729b781e61aed02942"
const category = "sports"
const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    newsdata.articles.forEach((article) => {
			
			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `
			<h1>${article.title}</h1>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
            <p><strong>Published at:</strong> ${article.publishedAt}</p>
            `
      articlesDiv.appendChild(div)
			
    })
}

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
