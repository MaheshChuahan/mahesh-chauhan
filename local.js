let addForm = document.getElementById('addData');
let editForm = document.getElementById('editData');
let title = document.querySelector('#bookname')
let price = document.querySelector('#price')
let category = document.querySelector('#category')
let author = document.querySelector('#author')
let editTitle = document.querySelector('#editbookname')
let editPrice = document.querySelector('#editprice')
let editCategory = document.querySelector('#editcategory')
let editAuthor = document.querySelector('#editauthor')
let updateButton = document.querySelector('#update-btn')
updateData = null
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let oldData = JSON.parse(localStorage.getItem('book')) || []
    let newBook = {
        title: title.value,
        price: price.value,
        category: category.value,
        author: author.value
    };
    oldData.push(newBook);
    localStorage.setItem('book', JSON.stringify(oldData));
    loadData()
    title.value = ""
    price.value = ""
    category.value = ""
    author.value = ""
})
function loadData() {
    let books = JSON.parse(localStorage.getItem('book'))
    let result = ""
    books.forEach((book, index) => {
        row = `<tr>
        <td>${index + 1}</td>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${book.category}</td>
        <td>${book.author}</td>
        <td><button onclick="EditRec(${index})">Edit</button> || <button onclick="DeleteRec(${index})">Delete</button></td>
        </tr>`
        result = result + row;
    });
    document.querySelector('#bookView').innerHTML = result;
}
loadData()
function DeleteRec(index) {
    let allData = JSON.parse(localStorage.getItem('book'));
    allData.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(allData));
    loadData()
}
function EditRec(index) {
    let allData = JSON.parse(localStorage.getItem('book'));
    let editRecord = allData[index]
    addForm.style.display = "none"
    editForm.style.display = "block"
    editTitle.value = editRecord.title;
    editPrice.value = editRecord.price;
    editCategory.value = editRecord.category;
    editAuthor.value = editRecord.author;
    updateindex = index;
}
updateButton.addEventListener('click', () => {
    let allData = JSON.parse(localStorage.getItem('book'));
    allData[updateindex] = {
        title: editTitle.value,
        price: editPrice.value,
        category: editCategory.value,
        author: editAuthor.value,
    }
    localStorage.setItem('book', JSON.stringify(allData));
    loadData()
}) 