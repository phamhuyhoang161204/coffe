import axios from "axios";
const axios_ins = axios.create({
    baseURL: "https://asm1-85532-default-rtdb.firebaseio.com/",
});

function layoutTbody({category_id, category_name}, key) {
    return `
    <tr>
        <th scope="row">${category_id}</th>
        <td>${category_name}</td>
        <td>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal-2" id="${key}" class="btn btn-warning update-category">Sửa</button>
            <button id="${key}" class="btn btn-danger delete-category">Xóa</button>
        </td>
      </tr>
    `;
}

async function loadCategories() {
        let response = await axios_ins.get('/categories.json');
        let listCategories = response.data;
        let str = "";

        for (const item in listCategories) {
            if (listCategories.hasOwnProperty(item)) {
                str += layoutTbody(listCategories[item], item);
            }
        }

        document.querySelector('tbody').innerHTML = str;
        addCategory();
        deleteCategory();
        handleEdit();
        updateCategory();
}
function addCategory() {
    document.getElementById('add-category').onclick = async () => {
        const category_name  = document.getElementById('category_name').value;
        const categories = {category_name};
        let response = await axios_ins.post('/categories.json', categories);
        console.log(response);
        if (response.status == 200) {
            const category_id = response.data.name;
            await axios_ins.patch(`/categories/${category_id}.json`, {category_id});
            alert('Thêm danh mục thành công');
        }
        document.getElementById('category_name').value = '';
        await loadCategories();
    }
}

function deleteCategory() {
    document.querySelectorAll('.delete-category').forEach(item => {
        item.onclick = async function() {
            const id = this.id;
            let response = await axios_ins.delete(`/categories/${id}.json`);

            if (response.status == 200) {
                await loadCategories();
                alert('Thêm danh mục thành công');
            }
        }
    })
}

function handleEdit() {
    document.querySelectorAll('.update-category').forEach(item => {
        item.onclick = async function() {
            const id = this.id;
            let response = await axios_ins.get(`/categories/${id}.json`);
            let {category_name, category_id} = response.data;
            console.log(response.data);
            document.getElementById('category_name-2').value = category_name;
            document.getElementById('category_id').value = category_id;
        }
    })
}

function updateCategory() {
    document.getElementById('update-category').onclick = async () => {
        let category_name = document.getElementById('category_name-2').value;
        let category_id = document.getElementById('category_id').value;
        let response = await axios_ins.patch(`/categories/${category_id}.json`, {category_name});
        if (response.status == 200) {
            alert('Cập nhật thành công!')
            await loadCategories();
        }
    }
}

export default loadCategories;