const labels = [
    "playstation 2",
    "gamecube",
    "nintendo DS",
    "Nintendo switch",
    "playstation 4 pro"
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Most played consoles in hours",
            data: [10000, 5000, 6000, 1000, 2000],
            backgroundColors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F47389'],
        }
    ]
}

const config = {
    type: 'doughnut',
    data: data,
}

const config2 = {
    type: 'bar',
    data: data,
}

const config3 = {
    type: 'line',
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);
new Chart(document.getElementById("js--chart--3"), config3);