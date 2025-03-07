let transactions = [
    {
        openTime: "2025.03.07 03:07:07",
        type: "buy",
        size: 0.01,
        symbol: "BTCUSD",
        openPrice: 85890.00,
        stopLoss: 0.00,
        takeProfit: 0.00,
        closeTime: "2025.03.07 03:08:00",
        closePrice: 86044.12,
        commission: 0.00,
        swap: 0.00,
        profitLoss: 1.54,
        comment: ""
    },
    {
        openTime: "2025.03.07 03:07:22",
        type: "sell",
        size: 0.01,
        symbol: "BTCUSD",
        openPrice: 85421.15,
        stopLoss: 0.00,
        takeProfit: 0.00,
        closeTime: "2025.03.07 03:08:03",
        closePrice: 86035.32,
        commission: 0.00,
        swap: 0.00,
        profitLoss: 0.00,
        comment: "cancelled"
    }
];

function updateTable() {
    const tbody = document.getElementById('transactionBody');
    tbody.innerHTML = '';

    transactions.forEach(t => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${t.openTime}</td>
            <td>${t.type}</td>
            <td>${t.size.toFixed(2)}</td>
            <td>${t.symbol}</td>
            <td>${t.openPrice.toFixed(2)}</td>
            <td>${t.stopLoss.toFixed(2)}</td>
            <td>${t.takeProfit.toFixed(2)}</td>
            <td>${t.closeTime}</td>
            <td>${t.closePrice.toFixed(2)}</td>
            <td>${t.commission.toFixed(2)}</td>
            <td>${t.swap.toFixed(2)}</td>
            <td>${t.profitLoss.toFixed(2)}</td>
            <td>${t.comment || '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// Panggil fungsi untuk menampilkan data saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateTable);
