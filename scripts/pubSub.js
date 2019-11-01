const pubSub = (function() {
    events = {}

    function subscribe(eventName, handler) {
        events[eventName] = events[eventName] || []
        events[eventName].push(handler)
    }
    function unsubscribe(eventName, handler) {
        if (events[eventName]) {
            events[evetnName].splice(evetnName[evetnName].indexOf(handler), 1)
        }
    }
    function emit(eventName, data = null) {
        if (events[eventName]) {
            events[eventName].forEach(handler => handler(data))
        }
    }
    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        emit: emit
    }
})()