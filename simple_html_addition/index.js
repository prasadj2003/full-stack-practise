

document.getElementById('btn').addEventListener('click', function () {
    let a = parseInt(document.getElementById('number_1').value);
    let b = parseInt(document.getElementById('number_2').value);

    let c = a + b;

    const ans = document.createElement('h1');
    const add = document.createTextNode(c);
    ans.appendChild(add);

    document.getElementsById('div').appendChild(ans);
})

