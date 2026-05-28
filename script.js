const denominations = [500, 100, 50, 20, 10, 5, 2, 1, 0.5];
let counts = {};

const container = document.getElementById('buttons');
denominations.forEach(val => {
    counts[val] = 0;
    const btn = document.createElement('button');
    btn.className = 'money-btn';
    btn.innerHTML = `
        <span class="val-text">$${val}</span>
        <div class="controls">
            <span class="minus" onclick="event.stopPropagation(); updateCount(${val}, -1)">-</span>
            <span class="count">${counts[val]}</span>
            <span class="plus" onclick="event.stopPropagation(); updateCount(${val}, 1)">+</span>
        </div>
    `;
    container.appendChild(btn);
});

function updateCount(val, delta) {
    counts[val] = Math.max(0, counts[val] + delta);
    document.querySelector(`button:nth-child(${denominations.indexOf(val) + 1}) .count`).innerText = counts[val];
    updateTotal();
}

function updateTotal() {
    let total = denominations.reduce((sum, val) => sum + (val * counts[val]), 0);
    document.getElementById('total').innerText = total.toFixed(1);
}

function reset() {
    location.reload();
}
