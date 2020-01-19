function simulateClass(num) {
    let private = num;
    return {

        getPrivate: function () {

            return private;
        },
        setPrivate: function (new_num) {
            private = new_num;
        }
    }
}

let obj = simulateClass(2);
console.log(obj.getPrivate());


let obj1 = simulateClass(8);
console.log(obj1.getPrivate());