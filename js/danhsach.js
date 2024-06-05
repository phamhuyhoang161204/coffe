function sanPham({ name, price, url }, key) {
  return `
  <tr class="danhsach">
      <td><input type="checkbox"></td>
      <td>${name}</td>
      <td><img class="anhsp" src="${url}" alt=""></td>
      <td>${price}</td>
      <td>
          <button class="xoa" data-key="${key}"><i class="fa-solid fa-trash"></i>&ensp;Xóa</button>
          <button class="sua"><i class="fa-solid fa-screwdriver-wrench"></i>&ensp;Sửa</button>
      </td>
  </tr>
  `;
}

function xoaSanPham(key) {
  fetch(`https://asm1-85532-default-rtdb.firebaseio.com/product/${key}.json`, {
      method: 'DELETE',
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      // Xóa thành công, cập nhật giao diện bằng cách gọi lại dữ liệu
      fetchDataAndRender();
  })
  .catch(error => {
      console.error('Error deleting product:', error);
  });
}

function fetchDataAndRender() {
  fetch("https://asm1-85532-default-rtdb.firebaseio.com/product.json")
  .then((response) => response.json())
  .then((json) => {
      let datas = "";
      for (const key in json) {
          if (Object.hasOwnProperty.call(json, key)) {
              const user = json[key];
              datas += sanPham(user, key);
          }
      }
      document.getElementById("danhsach").innerHTML = datas;

      // Lắng nghe sự kiện click để xóa sản phẩm
      document.querySelectorAll('.xoa').forEach(button => {
          button.addEventListener('click', function() {
              const key = this.getAttribute('data-key');
              xoaSanPham(key);
          });
      });
  })
  .catch((error) => console.error("Error fetching data:", error));
}

// Lấy dữ liệu ban đầu và render giao diện
fetchDataAndRender();


