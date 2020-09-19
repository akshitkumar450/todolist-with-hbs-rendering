const route=require('express').Router();

let todosArr=[
    {task: "This is the first task"},
    {task: "This is another task"}
]
route.get('/',(req, res) => {
    res.render('todo',{
        todosArr
    })
})

route.post('/',(req, res) => {
    todosArr.push({
        task:req.body.newTodo
    })
    res.redirect('/todo')
})

module.exports=route;