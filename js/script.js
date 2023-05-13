//script panggil hari
var tw = new Date();
if (tw.getTimezoneOffset() == 0) a = tw.getTime() + 7 * 60 * 60 * 1000;
else a = tw.getTime();
tw.setTime(a);
var tahun = tw.getFullYear();
var hari = tw.getDay();
var bulan = tw.getMonth();
var tanggal = tw.getDate();
var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember");
document.getElementById("tanggalwaktu").innerHTML = hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] + " " + tahun;

//script panggil tanggal
var dt = new Date();
document.getElementById("jam").innerHTML = ("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2);

//fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

//aos
AOS.init();

//button go to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};
backToTopButton.addEventListener("click", goToTop);

//orgchart untuk susunan pengurus
OrgChart.LINK_ROUNDED_CORNERS = 20;
OrgChart.templates.ana.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />';
OrgChart.templates.ana.min = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.ana.min.size = [250, 60];
OrgChart.templates.ana.min.img_0 = "";
OrgChart.templates.ana.min.field_0 = '<text data-width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="40" text-anchor="middle">{val}</text>';
OrgChart.templates.ana.min.field_1 = "";
var chart = new OrgChart(document.getElementById("tree"), {
  template: "ana",
  min: true,
  enableSearch: false,
  nodeMenu: {
    details: { text: "Details" },
    // edit: { text: "Edit" },
    // add: { text: "Add" },
    // remove: { text: "Remove" }
  },
  nodeBinding: {
    field_0: "name",
    field_1: "title",
    img_0: "img",
  },
  enableSearch: false,
  nodeBinding: {
    field_0: "name",
  },
});
chart.load([
  { id: 1, name: "Ketua", title: "Ketua DKM" },
  { id: 2, pid: 1, name: "Wakil I", title: "Ketua DKM" },
  { id: 3, pid: 1, name: "Wakil II", title: "Ketua DKM" },
  { id: 4, pid: 2, name: "Bendahara I", title: "Ketua DKM" },
  { id: 5, pid: 3, name: "Bendahara II", title: "Ketua DKM" },
  { id: 6, pid: 2, name: "Sekertaris I", title: "Ketua DKM" },
  { id: 7, pid: 3, name: "Sekertaris II", title: "Ketua DKM" },
]);
