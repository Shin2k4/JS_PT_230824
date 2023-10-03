

let titles = []
let dataLocal = localStorage.getItem("ListNote");
let arrTitle = dataLocal.split(",");
titles = arrTitle;
console.log(arrTitle);
console.log(localStorage.getItem("ListNote"));
function renderTitle(title) {
    let data = ``;
    for (let note of title) {
        data += `
            <div class="btc_p">
            <p>${note}</p>
            <button class="btn_delete" onclick="deleteTitle('${note}')">
            <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        `
    }
    document.getElementById("list_note").innerHTML = data;

}
renderTitle(titles);

function addTitle() {
    let title = document.getElementById("title").value;

    console.log(title.length);
    if (title == "" || title.length > 25) {
        alert("input loi")
        return;
    }
    titles.push(title);
    localStorage.setItem("ListNote", titles);
    renderTitle(titles);

}


function deleteTitle(title) {
    titles = titles.filter(function (item) {
        return item != title
    })
    localStorage.setItem("ListNote", titles);
    renderTitle(titles)
}
console.log(localStorage.getItem("ListNote"))

