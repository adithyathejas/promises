const posts = [
    {title: 'post one', body: 'this is post one' ,createdAt:Math.floor(new Date().getTime()/1000)},
    {title: 'post two', body: 'this is post two',createdAt:Math.floor(Date.now()/1000)}
]
let intervalid = 0
function getPosts(){
    
   setTimeout(() => {
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

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false
            if(!error){
                resolve()
            }
            else{
                reject('Err: something went wrong')
            }
        },2000)
    })
    
}
createPost({title:'post three',body:'this is post three' ,createdAt:Math.floor(Date.now()/1000)}).then(getPosts).catch(err=>console.log(err))

function deletepost(){
    setTimeout(() => {
        return new Promise((resolve,reject)=>{
            let del = posts.pop()
            console.log(del)
            if(del!=null){
                resolve()      
            }
            else{
                reject("invalid operation")
            }
        })    
    }, 2000);
    
} 

let page = async function (){
    let 
} 