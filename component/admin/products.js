import axios from "axios";
const axios_ins = axios.create({
    baseURL: "https://asm1-85532-default-rtdb.firebaseio.com/",
});

function layoutTbody({product_id, name, image, price, discount, new_price, }, key) {
    return `
    <tr>
        <td>${product_id}</td>
        <td>${name}</td>
        <td><img style="width: 100px;" src="${image}" alt=""></td>
        <td>${new Intl.NumberFormat('vi-VN').format(price)}đ</td>
        <td>-${discount > 0 ? discount : 0}%</td>
        <td>${new Intl.NumberFormat('vi-VN').format(new_price)}đ</td>
        <td>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal-2" id="${key}" class="btn btn-warning update-products">Sửa</button>
            <button id="${key}" class="btn btn-danger delete-products">Xóa</button>
        </td>
    </tr>`;
}

function layoutSelect({category_id, category_name}) {
    return `<option value="${category_id}">${category_name}</option>`;
}

async function loadProducts() {
    let response = await axios_ins.get('/products.json');
    let response2 = await axios_ins.get('/categories.json');
    let listCategories = response2.data;
    let listProducts = response.data;
    let str = "";
    let str2 = "";

    for(const item in listProducts) {
        if (listProducts.hasOwnProperty(item)) {
            str += layoutTbody(listProducts[item], item);
        }
    }

    for(const item in listCategories) {
        if (listCategories.hasOwnProperty(item)) {
            str2 += layoutSelect(listCategories[item]);
        }
    }
    document.querySelector('tbody').innerHTML = str;
    document.querySelector('#select-c').innerHTML = str2;

    addProduct();
    deleteProduct();
    handleEdit();
    updateProduct();
}

function addProduct() {
    document.getElementById('add-product').onclick = async () => {
        const name = document.getElementById('product_name').value;
        const price = document.getElementById('price').value;
        const image = document.getElementById('image').value;
        const discount = document.getElementById('discount').value;
        const description = document.getElementById('description').value;
        const category_id = document.getElementById('select-c').value;
        let new_price = price - (price * (discount / 100));

        let products = {name, price, image, discount, description, category_id, new_price};

        let response = await axios_ins.post('/products.json', products);

        if (response.status == 200) {
            const product_id = response.data.name;
            await axios_ins.patch(`products/${product_id}.json`, {product_id});

            alert('Thêm sản phẩm thành công');
            document.getElementById('product_name').value = "";
            document.getElementById('price').value = "";
            document.getElementById('image').value = "";
            document.getElementById('discount').value = "";
            document.getElementById('description').value = "";
        }

        await loadProducts();
    }
}

function deleteProduct() {
    document.querySelectorAll('.delete-products').forEach(item => {
        item.onclick = async function() {
            const id = this.id;
            let response = await axios_ins.delete(`products/${id}.json`);
            if (response.status == 200) {
                alert('Xóa sản phẩm thành công');
                await loadProducts();
            }
        }
    })
}

function handleEdit() {
    document.querySelectorAll('.update-products').forEach(item => {
        item.onclick = async function() {
            let response2 = await axios_ins.get('/categories.json');
            let listCategories = response2.data;
            let str = '';
            const id = this.id;
            let response = await axios_ins.get(`./products/${id}.json`);
            let {name, price, image, discount, description, product_id} = response.data;
            document.getElementById('product_name-2').value = name;
            document.getElementById('price-2').value = price;
            document.getElementById('image-2').value = image;
            document.getElementById('discount-2').value = discount;
            document.getElementById('description-2').value = description;
            document.getElementById('product_id').value = product_id;

            for(const item in listCategories) {
                if (listCategories.hasOwnProperty(item)) {
                    str += layoutSelect(listCategories[item]);
                }
            }
            document.querySelector('#select-c-2').innerHTML = str;
        }
    })
}

function updateProduct() {
    document.getElementById('update-product').onclick = async () => {
        const product_id = document.getElementById('product_id').value;
        const name = document.getElementById('product_name-2').value;
        const price = document.getElementById('price-2').value;
        const image = document.getElementById('image-2').value;
        const discount = document.getElementById('discount-2').value;
        const description = document.getElementById('description-2').value;
        const category_id = document.getElementById('select-c-2').value;
        let new_price = price - (price * (discount / 100));

        let products = {name, price, image, discount, description, category_id, new_price};
        let response = await axios_ins.patch(`/products/${product_id}.json`, products);
        if (response.status == 200) {
            alert('Cập nhật thành công');
            await loadProducts();
        }
    }
}

export default loadProducts;