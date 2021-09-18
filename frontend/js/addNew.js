/*
    This addNew.js file will get data from addNew. html table and
    it will post to server via "POST" method
*/
$(document).ready(() => {
    const url = 'http://localhost:3000/product';


    var add = document.getElementById("submitButton");
    add.addEventListener('click', function () {
        const pname = document.getElementById('name').value;
        const pdescription = document.getElementById('proDesc').value;
        const pprice = document.getElementById('price').value;
        const pqty = document.getElementById('qty').value;
        const ptype = document.getElementById('typeProduct').value;
        const pimg = document.getElementById('imagePrduct').value;


        var product = new Object();
        product.name = pname;
        product.description = pdescription;
        product.price = pprice;
        product.qty = pqty;
        product.type = ptype;
        product.img = pimg;

        const data = JSON.stringify(product);
        console.log(data);

        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => { return res.json() })
            .then((data) => {
                console.log(`${JSON.stringify(data)}`)
            })
    });
});