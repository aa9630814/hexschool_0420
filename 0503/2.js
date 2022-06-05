;(function(){

    function hello () {
        console.log('Hello world！');
    }

    function sayHi (value) {
        console.log(`${value}，Hello world！`)
    }

    function add (n) {
        console.log(n+n);
    }

    function addTwo (n1,n2) {
        console.log(n1+n2);
    }

    function addNumberAndString (n1,n2,n3) {
        console.log(`第一加第二個參數加總為 ${n1+n2}，第三個參數為 ${n3}`);
    }


})();