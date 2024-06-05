
  function sanPham({ name, price, url }, key) {
    return `<div class="product-1">
    <div class="product-2">
        <a href="/chitietsp"data-navigo=""><img src="${url}" alt=""></a>
    </div>
    <div class="product-3">
        <a href="/chitietsp"data-navigo="">${name}</a>
        <div class="product-4">
            <div class="product-5">
                <span>${price} &nbsp; <p>đ</p> </span>
            </div>
            <div class="product-6">
            <a href="/giohang"data-navigo ><i class="fa-solid fa-cart-plus"></i></a>
            </div>
        </div>
    </div>
</div>`;
  }
  
  fetch("https://asm1-85532-default-rtdb.firebaseio.com/product.json?orderBy=%22danhmuc%22&equalTo=%22s%E1%BA%A3n%20ph%E1%BA%A9m%22")
    .then((response) => response.json())
    .then((json) => {
      let datas = "";
      for (const key in json) {
        if (Object.hasOwnProperty.call(json, key)) {
          const user = json[key];
          datas += sanPham(user, key);
        }
      }
  
  
  
      document.getElementById("product").innerHTML = datas;
    })
    .catch((error) => console.error("Error fetching data:", error));



