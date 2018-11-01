import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import styled from 'styled-components'

export const query = graphql`
query getArticle {
  allContentfulArticlePost {
    edges {
      node {
        title        
      }
    }
  }
}
`

export default ({data}) => {
  const articles = data.allContentfulArticlePost.edges
  console.log(articles)

  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="DOM IS MY FRIEND! Dan is my friend too, one day ill have a tesla" />
      <p>What a world.</p>
      <img src="http://www.adamelmakias.com/wp-content/uploads/2018/10/TheGatheringDailyLogo.png" alt="" />

      {articles.map((article, index) => {
        return(
          <Article key={index} article={article} />
        )
      })}
    </div>
  )
}

const Article = ({article}) => {
  return (
    <StyledArticle>
      {article.node.title}
      <p>This is the body text</p>
      <a href="#" className="read-more">Read more</a>
      <a href="#" className="view-player">View player</a>
      <a href="#" className="view-player">View player 2</a>
      <a href="#" className="view-player">View player 3</a>
      <a href="#" className="view-player">View player 4</a>
    </StyledArticle>
  )
}

const StyledArticle = styled.div`
  border: 1px solid black;
  margin: 1rem 1rem;
  padding: 10px 10px 10px 10px;

  a {
    text-align: right;
    margin: 100px 10px;
  }
  .view-player {
    color: green;
  }

  .read-more {
    color: red;
  }
`