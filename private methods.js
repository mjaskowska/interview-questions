let myModule = (function(){
    let _data = []
    let _render = function () {}
    let _add = function () {}
    let _remove = function () {}
    return {
        render: _render
    }
})()
// IIFE immediately invoked function expression

myModule.render()
// the only method we will be able to access