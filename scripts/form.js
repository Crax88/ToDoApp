const form = (function() {
    const elem = document.querySelector('.todo-module')
    let username
    let password

    pubSub.subscribe('showForm', render)

    function render() {
        elem.innerHTML = `
            <form class="logForm">
            <label>Username:
                <input type="text" id="username">
            </label>
            <label>Password:
                <input type="password" id="password">
            </label>
                <input id="button" type="submit" value="Submit">
            </form>
        `
         username = elem.querySelector('#username')
         password = elem.querySelector('#password')
        addListeners()
    }

    function addListeners() {
        elem.querySelector('.logForm').addEventListener('submit', submitHandler)
    }

    function submitHandler(e) {
        e.preventDefault()
        let name = username.value;
        let pass = password.value;
        if (name == 'Crax' && pass == 'Damir2010') {
            pubSub.emit('logged', {name: name, password: pass})
        }

    }
})()