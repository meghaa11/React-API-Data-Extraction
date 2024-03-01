import React, {useState, useEffect} from 'react'

export default function FetchData() {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error(error))

        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error(error))
    }, [])


    return (
    <div className="postsList">
            {posts.map((posts, index) => {
                return (<div className="post" key={index}> 
                    <div className="user"> User ID: {posts.id} </div>
                    <div className="title"> {posts.title} </div>
                    <div className="body"> {posts.body} </div>
                    <ul>
                        <p>test</p>
                        {comments.filter(comment => comment.postID === posts.id)
                                .map((comment,index) => 
                                <li key={index}> Comment: {comment.body} </li> )}
                        <p>test1</p>
                    </ul> 
                </div>)
                }  
            )}

    </div>
  )
}

