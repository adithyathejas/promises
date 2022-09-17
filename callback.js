const posts = [
    {title: 'post one', body: 'this is post one' ,createdAt:Math.floor(new Date().getTime()/1000)},
    {title: 'post two', body: 'this is post two',createdAt:Math.floor(Date.now()/1000)}
]
let intervalid = 0
function getPosts(){
    clearInterval(intervalid)
    intervalid = setInterval(() => {
        let output = '';posts.forEach((post,index)=>{
            // let date  = Math.floor(Date.now()/1000) 
            // console.log(date)
                let string = post.title 
                output += `<li id = ${string.split(" ").pop()} > ${post.title} created ${Math.floor((Date.now()/1000))-post.createdAt} seconds ago `;
            });
            document.body.innerHTML = output;
        console.log(intervalid)
    }, 1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
        
    },1000)
}

createPost({title:'post three',body:'this is post three',createdAt:Math.floor(Date.now()/1000)},getPosts)




