let transactions = [];

document.getElementById('transactionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai dari form
    const asset = document.getElementById('asset').value.toUpperCase();
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const entry = parseFloat(document.getElementById('entry').value);
    const exit = document.getElementById('exit').value ? parseFloat(document.getElementById('exit').value) : null;
    const notes = document.getElementById('notes').value;

    // Hitung profit/loss
    let profitLoss = null;
    if (exit !== null) {
        profitLoss = type === 'buy' ? (exit - entry) * amount : (entry - exit) * amount;
    }

    // Tambahkan transaksi
    const transaction = {
        date: new Date().toLocaleString(),
        asset,
        type,
        amount,
        entry,
        exit,
        profitLoss,
        notes
    };
    transactions.push(transaction);

    // Reset form
    this.reset();

    // Perbarui tampilan
    updateTable();
    updateSummary();
});

function updateTable() {
    const tbody = document.getElementById('transactionBody');
    tbody.innerHTML = '';

    transactions.forEach(t => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${t.date}</td>
            <td>${t.asset}</td>
            <td>${t.type}</td>
            <td>${t.amount}</td>
            <td>${t.entry}</td>
            <td>${t.exit || '-'}</td>
            <td>${t.profitLoss !== null ? t.profitLoss.toFixed(2) : '-'}</td>
            <td>${t.notes}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateSummary() {
    const totalTrades = transactions.length;
    const totalPL = transactions.reduce((sum, t) => sum + (t.profitLoss || 0), 0);
    const avgPL = totalTrades > 0 ? totalPL / totalTrades : 0;
    const btcTrades = transactions.filter(t => t.asset === 'BTC').length;
    const forexTrades = totalTrades - btcTrades;

    document.getElementById('totalTrades').textContent = totalTrades;
    document.getElementById('totalPL').textContent = totalPL.toFixed(2);
    document.getElementById('avgPL').textContent = avgPL.toFixed(2);
    document.getElementById('btcTrades').textContent = btcTrades;
    document.getElementById('forexTrades').textContent = forexTrades;
}
