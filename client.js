

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <p>  
      <a href="http://127.0.0.1:3001/get-cookie">Дай куку</a>
    </p>
    <p>
      <button onClick="getAuth()">Проверить авторизацию</button>
    </p>
    <script>
    function getAuth() {
      fetch('http://127.0.0.1:3001/say-hello', {
        credentials: 'include'
      }).then(res => res.text()).then(data => alert(data));
    }
    </script>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})