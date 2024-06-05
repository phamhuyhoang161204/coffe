import axios from "axios";

const axios_ins = axios.create({
    baseURL: "https://asm1-85532-default-rtdb.firebaseio.com/",
});

function layout({ image, name, new_price }) {
    return `
    <div class="sanpham-1">
        <div class="sanpham-2">
            <a href=""><img src="${image}" alt=""></a>
        </div>
        <div class="sanpham-3">
            <a href="/chitietsp" data-navigo="">${name}</a>
            <div class="sanpham-4">
                <div class="sanpham-5">
                    <span>${new_price} &nbsp; <p>đ</p> </span>
                </div>
                <div class="sanpham-6">
                    <a href="/giohang"data-navigo ><i class="fa-solid fa-cart-plus"></i></a>
                </div>
            </div>
        </div>
    </div>`;
}
function layout1({ image, name, new_price }) {
    return `
    <div class="product-1">
                    <div class="product-2">
                        <a href="/chitietsp" data-navigo><img src="${image}" alt=""></a>
                    </div>
                    <div class="product-3">
                        <a href="/chitietsp" data-navigo>${name}</a>
                        <div class="product-4">
                            <div class="product-5">
                                <span>${new_price}&nbsp; <p>đ</p> </span>
                            </div>
                            <div class="product-6">
                                <a href="/giohang"data-navigo><i class="fa-solid fa-cart-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}
async function select4() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrUyDjbTOL0v9TIhRoq') {
            const product = data[item];
            str += layout1(product);
        }
    })
    document.getElementById('product').innerHTML = str;
}

async function select1() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrTLTp0M46jB598pWAa') {
            const product = data[item];
            str += layout(product);
        }
    })
    document.getElementById('data').innerHTML = str;
}

async function select2() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrTLaMMr7W9irHfXF7-') {
            const product = data[item];
            str += layout(product);
        }
    })
    document.getElementById('data1').innerHTML = str;
}

async function select3() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrTLiG37sn3XIXHOApe') {
            const product = data[item];
            str += layout(product);
        }
    })
    document.getElementById('data2').innerHTML = str;
}

async function selectAll() {
    select1();
    select2();
    select3();
    select4();
}

export default selectAll;