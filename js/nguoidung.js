const getApi = "https://my-firebase-85ca7-default-rtdb.firebaseio.com/users.json";

const tbodyS = ({id, name, email}, key) => {
    return `
        <tr class="danhsach">
            <td><input type="checkbox"></td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td><a href=""><button class="xoa"><i class="fa-solid fa-trash" onclick="editUser('${id}')"></i>&ensp;Xóa</button></a>
                <a href=""><button class="sua"><i class="fa-solid fa-screwdriver-wrench" delete-user" id="${key}"></i>&ensp;Sửa</button></a>
            </td>
        </tr>
    `;
    
}

function deleteUser() {
    // Gửi yêu cầu xóa người dùng
    const deleteUsers = document.querySelectorAll('.delete-user');
    deleteUsers.forEach((item) => {
        item.onclick = function() {
            const userId = this.id;
            fetch(`https://my-firebase-85ca7-default-rtdb.firebaseio.com/users/${userId}.json`, {
                method: 'DELETE',
            })
            this.parentElement.parentElement.remove();
            alert("Deleted success!!!");
        }
    })
}

document.getElementById('save').onclick = () => {
    const email = document.querySelector('input[name="email"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const id = document.querySelector('input[name="id"]').value;
    const info = {
        id,
        email,
        name
    }

    fetch(getApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Dữ liệu đã được thêm vào Firebase:', data);
    })

    console.log(info);
}

fetch(getApi)
    .then((response) => response.json())
    .then((json) => {
        let datas = '';
        for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
              const user = json[key];
      
              datas += tbodyS(user, key);
            }
          }
        document.querySelector('tbody').innerHTML = datas;
        deleteUser();
    })