import Navigo from "navigo";
import sanpham from "./html/sanpham.html?raw";
import lienhe from "./html/lienhe.html?raw";
import gioithieu from "./html/gioithieu.html?raw";
import dangnhap from "./html/dangnhap.html?raw";
import dangki from "./html/dangki.html?raw";
import chitietsp from "./html/chitietsp.html?raw";
import giohang from "./html/giohang.html?raw";
import thanhtoan from "./html/thanhtoan.html?raw";
import templateUser from "./html/templateUser.html?raw";
import templateAdmin from "./admin/templateAdmin.html?raw";
import nguoidung from "./admin/nguoidung.html?raw"
// import danhsach from "./admin/danhsach.html?raw"

import categories from "./pages/admin/category";
import loadCategories from "./component/admin/categories";
import productAdmin from "./pages/admin/product";
import loadProducts from "./component/admin/products.js";
import Home from "./pages/users/home.js";
import selectAll from "./component/users/home.js";
const router = new Navigo("/");
function mySlidejs(){
  const scriptElement1 = document.createElement('script');
  scriptElement1.src = './js/mySlide.js';
  document.head.appendChild(scriptElement1);

  const scriptElement2 = document.createElement('script');
  scriptElement2.src = './js/slide.js';
  document.head.appendChild(scriptElement2);

  const scriptElement3 = document.createElement('script');
  scriptElement3.src = './js/sanpham.js';
  document.head.appendChild(scriptElement3);
}

function product(){
  const scriptElement1 = document.createElement('script');
  scriptElement1.src = './js/trangsanpham.js';
  document.head.appendChild(scriptElement1);
}

function details(){
  const scriptElement1 = document.createElement('script');

  scriptElement1.src = './js/chitietsp.js';
  document.head.appendChild(scriptElement1);
}

function list(){
  const scriptElement1 = document.createElement('script');
  scriptElement1.src = './js/danhsach.js';
  document.head.appendChild(scriptElement1);
}


router
.on("/", async () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = Home();
  await selectAll();
  mySlidejs();
})

.on("/home", async () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = Home();
  await selectAll();
  mySlidejs();
})
.on("/sanpham",async () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = sanpham;
  await selectAll();
  product();
})

.on("/lienhe", () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = lienhe;
})

.on("/gioithieu", () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = gioithieu;
  mySlidejs();
})
.on("/dangnhap", () => {
  document.getElementById('main').innerHTML = dangnhap;
})
.on("/dangki", () => {
  document.getElementById('main').innerHTML = dangki;
})
.on("/chitietsp", () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById('app').innerHTML = chitietsp;
  details();
})
.on("/giohang", () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = giohang; 
})
.on("/thanhtoan", () => {
  document.getElementById('main').innerHTML = templateUser;
  document.getElementById("app").innerHTML = thanhtoan; 
})
.on("/templateAdmin", () => {
  document.getElementById('main').innerHTML = templateAdmin;
  document.getElementById("nd").innerHTML =homeadmin ; 
})
.on("/danhmuc", async () => {
  document.getElementById('main').innerHTML = templateAdmin;
  document.getElementById("nd").innerHTML = categories(); 
  await loadCategories();
})
.on("/hanghoa", async  () => {
  document.getElementById('main').innerHTML = templateAdmin;
  document.getElementById("nd").innerHTML = productAdmin() ; 
  await loadProducts();
})
.on("/nguoidung", () => {
  document.getElementById('main').innerHTML = templateAdmin;
  document.getElementById("nd").innerHTML =nguoidung ;
})
.on("/danhsach", () => {
  document.getElementById('main').innerHTML = templateAdmin;
  document.getElementById("nd").innerHTML =danhsach ; 
  list();
})
router.resolve();


