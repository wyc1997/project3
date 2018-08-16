var order_data;
var presented = "tab_piz";
var subs_data;
var pasta_data;
var salad_data;
var dinner_platter_data;

document.querySelectorAll(".td_left").forEach(td => {
    td.onclick = () => {
        td.style.backgroundColor = "white";
        td.style.borderRight = "None";
        document.querySelector(`#${presented}`).style.backgroundColor = "red";
        document.querySelector(`#${presented}`).style.borderRight = "black 2px solid";
        presented = td.id
    }
})
