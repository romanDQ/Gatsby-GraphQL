import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

const getData = graphql`
  query{
  site  {
    siteMetadata  {
      description
      siteTitle:title
      author
      data  {
        age
      }
    }
  }
}`

const HeaderStatic = () => {
    return (
        <StaticQuery 
        query={getData} 
        render={(data)=>{
            return <div>
                <p>
                    {data.site.siteMetadata.description}
                </p>
            </div>
        }}>
            Using static query
        </StaticQuery>
    )
}

export default HeaderStatic
