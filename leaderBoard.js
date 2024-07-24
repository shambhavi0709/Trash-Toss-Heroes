document.addEventListener('DOMContentLoaded', function() {
    // Example data
    const leaderboardData = [
        { name: 'Player 1', number: 1, date: getCurrentDate() },
        { name: 'Player 2', number: 0, date: getCurrentDate() },
        { name: 'Player 3', number: 1, date: getCurrentDate() },
        // Add more data as needed
    ];

    // Populate leaderboard table
    const leaderboardTable = document.getElementById('leaderboard');
    const tbody = leaderboardTable.querySelector('tbody');

    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.number}</td>
            <td>${entry.date}</td>
        `;
        tbody.appendChild(row);
    });
});

function getCurrentDate() {
    const today = new Date();
    const date = today.toLocaleDateString();
    return date;
}
