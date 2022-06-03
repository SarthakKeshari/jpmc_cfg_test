var xValues = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
        
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [10000,5000,10000,20000,15000,28000,18000,4000,14000,13000,14000,5000],
      borderColor: "purple",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});