// Basic structure
/*
(function(){
    // Declare private vars and functions

    return {
        // Declare public vars and functions

    }
})();
*/
/*
const UICtrl = (function(){
    let txt = 'Hello World';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = txt;
    }

    return {
        callChangeText: function(){
            changeText();
            //console.log(txt);
        }
    }
})();

UICtrl.callChangeText();
*/

// revealing module pattern

const ItemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item added');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({ id: 1, name: 'Mary' });
console.log(ItemCtrl.get(1));