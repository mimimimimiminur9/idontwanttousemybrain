const denominations = [500, 100, 50, 20, 10, 5, 2, 1, 0.5];
let counts = {};

const container = document.getElementById('buttons');
denominations.forEach(val => {
    counts[val] = 0;
    const btn = document.createElement('button');
    btn.innerHTML = `$${val}<br>${counts[val]}`;
    btn.onclick = () => {
        counts[val]++;
        btn.innerHTML = `$${val}<br>${counts[val]}`;
        updateTotal();
    };
    container.appendChild(btn);
});

function updateTotal() {
    let total = denominations.reduce((sum, val) => sum + (val * counts[val]), 0);
    document.getElementById('total').innerText = total.toFixed(1);
}

function reset() {
    denominations.forEach(val => counts[val] = 0);
    location.reload();
}
