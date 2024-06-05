var btn = document.querySelectorAll('.noibat-2 button');
var an = document.querySelectorAll('.an');

btn.forEach((element, index) => {
  element.onclick = function () {
    document.querySelector('.an.active').classList.remove('active');
    an[index].classList.add('active');
  }
});


// Sản phẩm mới nhất

// function sanPham({ name, price, url }, key) {
//   return `<div class="sanpham-1">
//                 <div class="sanpham-2">
//                     <a href="/chitietsp"data-navigo=""><img src="${url}" alt=""></a> 
//                 </div>
//                 <div class="sanpham-3">
//                     <a href="/chitietsp"data-navigo="">${name}</a>
//                     <div class="sanpham-4">
//                         <div class="sanpham-5">
//                             <span>${price}&nbsp; <p>đ</p> </span>
//                         </div>
//                         <div class="sanpham-6">
//                         <a href="/giohang" data-navigo><i class="fa-solid fa-cart-plus"></i></a>
//                         </div>
//                     </div>
//                 </div>
//            </div>`;
// }

// fetch("https://asm1-85532-default-rtdb.firebaseio.com/product.json?orderBy=%22danhmuc%22&equalTo=%22m%E1%BB%9Bi%20nh%E1%BA%A5t%22")
//   .then((response) => response.json())
//   .then((json) => {
//     let datas = "";
//     for (const key in json) {
//       if (Object.hasOwnProperty.call(json, key)) {
//         const user = json[key];
//         datas += sanPham(user, key);
//       }
//     }



//     document.getElementById("data").innerHTML = datas;
//   })
//   .catch((error) => console.error("Error fetching data:", error));



// // Sản phẩm giảm giá



// function sanPham({ name, price, url }, key) {
//   return `<div class="sanpham-1">
//                   <div class="sanpham-2">
//                       <a href="chitietsp"data-navigo=""><img src="${url}" alt=""></a> 
//                   </div>
//                   <div class="sanpham-3">
//                       <a href="./chitietsp"data-navigo="">${name}</a>
//                       <div class="sanpham-4">
//                           <div class="sanpham-5">
//                               <span>${price}&nbsp; <p>đ</p> </span>
//                           </div>
//                           <div class="sanpham-6">
//                           <a href="/giohang"data-navigo ><i class="fa-solid fa-cart-plus"></i></a>
//                           </div>
//                       </div>
//                   </div>
//              </div>`;
// }

// fetch("https://asm1-85532-default-rtdb.firebaseio.com/product.json?orderBy=%22danhmuc%22&equalTo=%22Khuy%E1%BA%BFn%20m%C3%A3i%22")
//   .then((response) => response.json())
//   .then((json) => {
//     let datas = "";
//     for (const key in json) {
//       if (Object.hasOwnProperty.call(json, key)) {
//         const user = json[key];

//         datas += sanPham(user, key);
//       }
//     }



//     document.getElementById("data1").innerHTML = datas;
//   })
//   .catch((error) => console.error("Error fetching data:", error));


// // Sản phẩm bán chạy

// function sanPham({ name, price, url }, key) {
//   return `<div class="sanpham-1">
//                    <div class="sanpham-2">
//                        <a href="/chitietsp"data-navigo=""><img src="${url}" alt=""></a> 
//                    </div>
//                    <div class="sanpham-3">
//                        <a href="/chitietsp"data-navigo="">${name}</a>
//                        <div class="sanpham-4">
//                            <div class="sanpham-5">
//                                <span>${price}&nbsp; <p>đ</p> </span>
//                            </div>
//                            <div class="sanpham-6">
//                            <a href="/giohang"data-navigo ><i class="fa-solid fa-cart-plus"></i></a>
//                            </div>
//                        </div>
//                    </div>
//               </div>`;
// }

// fetch("https://asm1-85532-default-rtdb.firebaseio.com/product.json?orderBy=%22danhmuc%22&equalTo=%22B%C3%A1n%20ch%E1%BA%A1y%22")
//   .then((response) => response.json())
//   .then((json) => {
//     let datas = "";
//     for (const key in json) {
//       if (Object.hasOwnProperty.call(json, key)) {
//         const user = json[key];

//         datas += sanPham(user, key);
//       }
//     }



//     document.getElementById("data2").innerHTML = datas;
//   })
//   .catch((error) => console.error("Error fetching data:", error));



  
  




