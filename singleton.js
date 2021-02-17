// singleton is an object that when you try to get an instance of it, you always get reference to the same instance

// ES6 modules are singletons

let obj = () => {
    let objInstance;
    function create ( ){
        let isRunning = false;
        let start = function() {
            isRunning = true;
        }
        let stop = function () {
            isRunning = false;
        }
        let currentState = function () {
            return isRunning
        }
        return {
            start,
            stop,
            currentState
        }
    }
    return {
        getInstance: function(){
            if (!objInstance){
                objInstance  = create()
            }
            else {
                return objInstance
            }
        }
    }
}