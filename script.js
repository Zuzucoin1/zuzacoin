
function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

const ctx = document.getElementById('growthChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
    datasets: [{
      label: '$ZUZU Price',
      data: [1, 5, 15, 30],
      borderColor: 'pink',
      tension: 0.3
    }]
  }
});
