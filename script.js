function portfolio() {
  location.replace("portfolio.html")
}

function home() {
  location.replace("main.html")
}

function soulfull_redirect() {
  location.replace("https://www.soulfull.ca/")
}

function bake_redirect() {
  location.replace("https://heathersbakery.ca/")
}

var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,2150,2478],
      borderColor: "red",
      fill: false
    }, {
      data: [2000,2700,3100,3900,4000,5000,5400,6000,6900,8000],
      borderColor: "green",
      fill: false
    }, {
      data: [300,700,800,500,600,400,700,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
