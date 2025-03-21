const options = {
  series: [
    {
      name: "Peminjaman",
      color: "#31C48D",
      data: ["1420", "1620", "1820", "1420", "1650", "2120"],
    },
    {
      name: "Pengembalian",
      data: ["788", "810", "866", "788", "1100", "1200"],
      color: "#F05252",
    },
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    type: "bar",
    width: "100%",
    height: 400,
    toolbar: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "100%",
      borderRadiusApplication: "end",
      borderRadius: 6,
      dataLabels: {
        position: "top",
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    formatter: function (value) {
      return value;
    },
  },
  xaxis: {
    labels: {
      show: false,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal",
      },
      formatter: function (value) {
        return value;
      },
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-white",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -20,
    },
  },
  fill: {
    opacity: 1,
  },
};

if (document.getElementById("bar-chart") && typeof ApexCharts !== "undefined") {
  const chart = new ApexCharts(document.getElementById("bar-chart"), options);
  chart.render();
}

document.addEventListener("DOMContentLoaded", function () {
  // if (localStorage.length > 0) {
  //   localStorage.clear();
  //   console.log("Semua lokal storage telah dihapus");
  // }

  const loadScripts = (sources) => {
    sources.forEach((src) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = src;
      document.body.appendChild(script);
    });
  };

  loadScripts(["/components/navbar.js", "/components/sidebar.js"]);
});
