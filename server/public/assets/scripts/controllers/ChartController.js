myApp.controller('StaticChartController', [function(){
  var staticChart = document.getElementById("pieChart");
  var myStaticChart = new Chart(staticChart, {
    type: 'pie',
    data: {
    labels: ["Complete", "Incomplete"],
    datasets: [
        {
            data: [60, 40],
            backgroundColor: [
                "#9CBE2A",
                "#2956B2",
            ],
            hoverBackgroundColor: [
                "#52BE2A",
                "#36A2EB",
            ]
        }]
  }
  });
  console.log(myStaticChart);
}]);//end of ChartController
