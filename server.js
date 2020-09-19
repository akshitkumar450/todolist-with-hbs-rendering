const  express=require('express')
const app=express();

app.set('view engine','hbs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/todo',require('./routes/todo.js'))

app.listen(5665)