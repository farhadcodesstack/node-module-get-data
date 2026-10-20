import express from 'express';
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users =[
    {id:1, name:"jhon doe", email:'json.doe@exmplae.com'},
    {id:2, name:"jane doe", email:'jane.doe@exmplae.com'},
    {id:3, name:"jake doe", email:'joke.doe@exmplae.com'},
    {id:4, name:"jill doe", email:'jill.doe@exmplae.com'}
]

app.get ('/users', (req,res) =>{
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})