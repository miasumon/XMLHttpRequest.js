const getButton = document.querySelector('#get-button');
const sendButton = document.querySelector('#send-button');


const sendRequest = (method,url,data) =>{
 return new Promise( (resolve,reject) =>{
    const xhr = new XMLHttpRequest();
  xhr.open(method,url);
  xhr.send(data);
 // xhr.setRequestHeader("Content-Type","application/json");
  xhr.responseType = "json";
  
  xhr.onload = () =>{
 //   const result = xhr.response;
    //console.log(JSON.parse(result));
  //  console.log(xhr.status);
  if(xhr.status >= 400){
    reject(xhr.response);
  }else{
    resolve(xhr.response);
  }
  };
  xhr.onerror = () =>{
    reject("something happened wrong ");
  };
  
  
}).then( (res) => {
  console.log(res);
}).catch( (err) =>{
  console.log(err);
});
};

const getData = () =>{
sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1" );
};

const sendData = () =>{
  sendRequest("POST","https://jsonplaceholder.typicode.com/posts/1", JSON.stringify(
  {
  id: 1,
  title: 'foo',
  body: '...',
  userId: 1
})
  
  );
  
};

getButton.addEventListener("click",getData);
sendButton.addEventListener("click",sendData);