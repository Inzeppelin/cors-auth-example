

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

const port = 3000

app.get('/', (req, res) => {
  if (req.cookies['SESSION_ID']) {
    res.cookie('SESSION_ID', req.cookies['SESSION_ID'], { httpOnly: true });
  }

  res.send(`
    <p>  
      <a href="http://localhost:3001/get-cookie">Дай куку</a>
    </p>
    <p>
      <button onClick="getAuth()">Проверить авторизацию</button>
    </p>
    <script>
    function getAuth() {
      fetch('http://localhost:3001/say-hello', {
        credentials: 'include'
      }).then(res => res.text()).then(data => alert(data));
    }
    </script>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})