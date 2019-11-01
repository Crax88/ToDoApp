const header = (function() {
    let status = 'out'
    let user = {}

    const elem = document.querySelector('.logContainer')

    pubSub.subscribe('logged', userLoged)
    render()

    const logInBtn = document.querySelector('#login')
    logInBtn.addEventListener('click', alert)

    function render() {
        if (status === 'out') {
            elem.innerHTML = `
            <a href="#" class="btn" id="login">Log In</a>
            `
        } else {
            elem.innerHTML = `
            <h3>Hi, ${user.name}</h3> 
            <a href="#" class="btn" id="logout">Log Out</a>
            `
            elem.querySelector('#logout').addEventListener('click', () => {
                status = 'out'
                user = {}
                render()
                alert()
            })
        }
    }
    function alert() {
        pubSub.emit('showForm')
    }

    function userLoged(data) {
        status = 'in'
        user = data
        render()
    }
})()