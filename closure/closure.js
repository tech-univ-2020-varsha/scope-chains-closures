function foo() {
    var bar;
    quux = 5;
    return function zip() {
        bar = true;
        var quux;
    }
}

module.exports = foo;