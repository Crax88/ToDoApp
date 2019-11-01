const people = (function() {
    //DATA
    let todos = []

    const el = document.querySelector('.todo-module')
    let form 
    let input 
    let list 

    pubSub.subscribe('logged', render)
    render()

    function render() {
        pubSub.emit('statsChange', todos)
        el.innerHTML = `
            <form id="addForm">
                <input type="text" id="input">
                <input id="button" type="submit" value="Add">
            </form>
            <ul id="todo-list"></ul>
        `
        form = el.querySelector('#addForm')
        input = form.querySelector('#input')
        list = el.querySelector('#todo-list')
        list.innerHTML = ''
        todos.forEach((todo, index) => {
            list.innerHTML += `
            <li class="todo-item" id=${index}>${todo} <button id="delete">delete</button></li>
            `
        })
        addListeners()
    }

    function addListeners() {
        form.addEventListener('submit', addTodo)
        list.addEventListener('click', deleteTodo)
    
    }

    function addTodo(e) {
        e.preventDefault()
        todos.push(input.value)
        render()
        input.value = ''
        pubSub.emit('addTodo', todos)
    }
    function deleteTodo({ target }) {
        if (target.getAttribute('id') != 'delete') return
        let index = target.parentNode.getAttribute('id')
        todos.splice(index, 1)
        render()
        pubSub.emit('deleteTodo', todos)
    }

    return {
        addTodo: addTodo,
        deleteTodo: deleteTodo
    }
})();

