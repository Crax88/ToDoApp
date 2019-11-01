const stats = (function() {
    let todos = {
        total: 0,
        progress: 0,
        done: 0
    }
    //Dom
    const total = document.querySelector('#total')
    const progress = document.querySelector('#inprogress')
    const done = document.querySelector('#done')
    pubSub.subscribe('addTodo', addTodo)
    pubSub.subscribe('deleteTodo', deleteTodo)
    render()
    // functions
    function getCount(num) {
        count = num
        render()
    }
    function addTodo(newtodos) {
        todos.total++
        todos.progress++
        render()
    }
    function deleteTodo(newtodos) {
        todos.progress--
        todos.done++
        render()
    }
    function render() {
        total.innerHTML = todos.total
        progress.innerHTML = todos.progress
        done.innerHTML = todos.done
    }
})()