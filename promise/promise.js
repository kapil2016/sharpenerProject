const posts = [{lastActivity: Date.now()}];
function getPosts(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolve(posts);
            }else{
                reject(`All the posts are deleted`);
            }
        },3000)
    })
}

function updateLastUserActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts[0].lastActivity = Date.now();
            resolve(); 
        },1000)
    })
}

function createPost(post){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve();
        },2000)
    })
}

function deletePost(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve();
        },1000)
    })

}
// Promise.all([updateLastUserActivityTime,createPost({title:"post 1"}),createPost({title:"post 2"})]).then(getPosts)
// .then((data)=> console.log(data)).then(deletePost).then(getPosts).then(data=>console.log(data));

async function handlePosts(){
    await Promise.all[createPost({title:"post 1"}) , createPost({title:"post 2"}) ,createPost({title:"post 3"}), updateLastUserActivityTime()]
    let posts =  await getPosts();
    console.log(posts);
    await deletePost();
    posts = await getPosts();
    console.log(posts);
    await deletePost();
    posts = await getPosts() ;
    console.log(posts);

}
handlePosts();



             




