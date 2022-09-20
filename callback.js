const posts = [
    {title: 'post one', body: 'this is post one' ,createdAt:Math.floor(new Date().getTime()/1000)},
    {title: 'post two', body: 'this is post two',createdAt:Math.floor(Date.now()/1000)}
]


function getPosts(){
    
   setTimeout(() => {
        let output = '';posts.forEach((post,index)=>{
            // let date  = Math.floor(Date.now()/1000) 
            // console.log(date)
                let string = post.title 
                output += `<li id = ${string.split(" ").pop()} > ${post.title} created ${Math.floor((Date.now()/1000))-post.createdAt} seconds ago `;
            });
            document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false
            if(!error){
                resolve('created')
            }
            else{
                reject('Err: something went wrong')
            }
        },2000)
    })
    
}


async function deletepost(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
          let del = posts.pop()
            if(del!=null){
                resolve('deleted')      
            }
            else{
                reject("invalid operation")
            }
        },3000)    
    });
    
} 


async function print(){
    let post = await createPost({title:'post three',body:'this is post three' ,createdAt:Math.floor(Date.now()/1000)})

    console.log(post)
    getPosts()

    let deleted = await deletepost()

    console.log(deleted)
    getPosts()

    let deleted2 = await deletepost()

    console.log(deleted2)
    getPosts()

    let deleted3 = await deletepost()

    console.log(deleted3)
    getPosts()

}

print()