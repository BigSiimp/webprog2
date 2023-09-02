import React from 'react'

export async function generateStaticParams() {
    const posts = await fetch('http://localhost:3001/joboffers/createdOn/all').then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id,
    })
    )
  }

  
  
  export default function page() {
    return (
      <div>My Post: {params.id}</div>
    )
  }
  