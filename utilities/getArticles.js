import articlesData from '../data/articlesData'

export default function getArticles() {
    const maxNum = articlesData.length
    const articleArray = []
    
    
function getArticle(){
  const randomArticle = articlesData[Math.floor(Math.random() * maxNum)]
  articleArray.push(randomArticle)
}

getArticle();

    
    return articleArray
    
  }
  