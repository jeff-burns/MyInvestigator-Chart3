var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart (ctx, {
type: 'line',

data: {
  labels: ["2014", "2015", "2016"],
  datasets: [{
      label: '# of Votes',
      data: [73, 199, 395],
      backgroundColor: [
          'rgba(54, 162, 235, .2)'
      ],
      borderColor: [
          'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
  }]
},
options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Year'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Students'
                },
            ticks: {
            beginAtZero: true
            }
            }]
        },
      }
})
