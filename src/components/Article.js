import * as React from "react"
import articles from "../data/articles.json"
import "../components/home.css"

const Article = () => {
  console.log(articles)
  return (
    <>
        {articles.map(article => (
          <div key={article.id} className="projcard-container">
            <div className="projcard projcard-red">
              <div className="projcard-innerbox">
                <img className="projcard-img" src={article.img} />
                <div className="projcard-textbox">
                  <div className="projcard-title">{article.title}</div>
                  <div className="projcard-description">
                    {article.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Article
