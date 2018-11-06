import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import styled from 'styled-components'
export default ({data}) => {
  const articles = data.allContentfulArticlePost.edges
  console.log(articles)

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