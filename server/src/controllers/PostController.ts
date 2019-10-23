import fetch from 'isomorphic-fetch'

export const posts = async(_req:any, res:any): Promise<void> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    res.json(posts);
}

export const getPost = async(req:any, res:any): Promise<void> => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${req.params.id}`);
    const post = await response.json();

    res.json(post[0]);
}