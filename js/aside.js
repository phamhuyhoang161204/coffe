function sanPham({ name, price, url }, key) {
    return `<div class="categories2-1">
    <a href="">
        <div class="categories2-2">
            <img src="${url}" alt="">
        </div>
        <div class="categories2-3">
            <h4>${name}</h4>
            <span>${price} &nbsp; <p>đ</p> </span>
        </div>
    </a>
</div>`;
  }
  
  fetch("https://asm1-85532-default-rtdb.firebaseio.com/asm/sanpham/trangsp.json")
    .then((response) => response.json())
    .then((json) => {
      let datas = "";
      for (const key in json) {
        if (Object.hasOwnProperty.call(json, key)) {
          const user = json[key];
          datas += sanPham(user, key);
        }
      }
  
  
  
      document.getElementById("aside-1").innerHTML = datas;
    })
    .catch((error) => console.error("Error fetching data:", error));