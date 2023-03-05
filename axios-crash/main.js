axios.defaults.headers.common['X-Auth-Token'] = 'kjhgfgvhbjnkm;iuyturytxcnmopoiytuyxfcgvhbjnmiouiyutyrtefcgvbliukyfjgjvkj;oioiuyutreswaqaszdxcvbnmmklo;pi'

// GET REQUEST
function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('GET Request');
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos' , {title : 'new todo ' , completed : false , newObj : 'nothing'})
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('POST Request');
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{title : 'changed' , completed : 'type changed' , new : 'newobj'})
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('PUT/PATCH Request');
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('DELETE Request');
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    ]).then((values)=>showOutput(values[1]))
      .catch((err)=> console.log(err))
    //console.log('Simultaneous Request');
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config ={
      headers :{
        'Content-Type' : 'Application/JSON',
         Authorization : 'some token'
      }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos' , {title : 'new todo ' , completed : false , newObj : 'nothing'} , config)
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options = {
      method: 'post' ,
      url: 'https://jsonplaceholder.typicode.com/todos' ,
      data: {title : 'hello world'} ,
      transformResponse: axios.defaults.transformResponse.concat((data)=>{data.title = data.title.toUpperCase(); return data ;})
    }
    
    axios(options)
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
    //console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todo')
    .then((res)=>showOutput(res))
    .catch((err)=>{
      if (err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }else if (err.request){
        console.log(err.request)
      }else {
        console.log(err.message)
      }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.CancelToken.source();

    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        cancelToken: source.token
      })
      .then(res => showOutput(res))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        }
      });
  
    if (true) {
      source.cancel('Request canceled!');
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  