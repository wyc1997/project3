var order_data;
var presented = "tab_piz";
var item_data = [];
var price_data = [];
var num_item = 0;
var total_price = 0.00;

document.addEventListener("DOMContentLoaded", () => {
    populate_table(presented);


});


document.querySelectorAll(".td_left").forEach(td => {
    td.onclick = () => {
        td.style.backgroundColor = "white";
        td.style.borderRight = "None";
        document.querySelector(`#${presented}`).style.backgroundColor = "red";
        document.querySelector(`#${presented}`).style.borderRight = "black 2px solid";
        presented = td.id;
        populate_table(presented);
    }
});


function populate_table(presented) {
    var mid_table = document.querySelector("#mid_table")
    switch (presented) {
        case "tab_piz":
            mid_table.innerHTML = "";
            mid_table.innerHTML = document.querySelector("#regular_pizza_tem").innerHTML;
            document.querySelector("#addon_drop_down").onchange = () => {
                switch (document.querySelector("#addon_drop_down").value) {
                    case "1_topping":
                        mid_table.innerHTML += document.querySelector("#topping_tem").innerHTML;
                        document.querySelector("#topping_drop_down").id = "topping_drop_down_1";
                    break;
                    case "2_toppings":
                        for (var i = 1; i <= 2; i++) {
                            mid_table.innerHTML += document.querySelector("#topping_tem").innerHTML;
                            document.querySelector("#topping_drop_down").id = `topping_drop_down_${i}`;
                        }
                    break;
                    case "3_toppings":
                        for (var i = 1; i <= 3; i++) {
                            mid_table.innerHTML += document.querySelector("#topping_tem").innerHTML;
                            document.querySelector("#topping_drop_down").id = `topping_drop_down_${i}`;
                        }
                    break;
                }
            }
        break;
        case "tab_pas":
            mid_table.innerHTML = "";
            mid_table.innerHTML = document.querySelector("#pas_tem").innerHTML
        break;
        case "tab_sal":
            mid_table.innerHTML = "";
            mid_table.innerHTML = document.querySelector("#sal_tem").innerHTML
        break;
        case "tab_din":
            mid_table.innerHTML = "";
            mid_table.innerHTML = document.querySelector("#din_tem").innerHTML
        break;
        case "tab_sub":
            mid_table.innerHTML = "";
            mid_table.innerHTML = document.querySelector("#sub_tem").innerHTML
        break;
    }

};

function add_item(e) {
    console.log(e.previousSibling.previousSibling.innerHTML);
    document.querySelector("#ver_table_right").innerHTML += document.querySelector("#order_list_item_1").innerHTML;

    document.querySelector("#order_list_span_name").innerHTML = e.parentNode.firstChild.nextSibling.innerHTML;
    document.querySelector("#order_list_span_price").innerHTML = e.previousSibling.previousSibling.innerHTML;

    document.querySelector("#order_list_span_name").id = `order_list_span_name_${e.parentNode.firstChild.nextSibling.innerHTML.replace(" ", "_")}`;
    document.querySelector("#order_list_span_price").id = `order_list_span_price_${e.parentNode.firstChild.nextSibling.innerHTML.replace(" ", "_")}`;

    num_item++;
    document.querySelector("#total_item").innerHTML = num_item;

    total_price = parseFloat(total_price) + parseFloat(e.previousSibling.previousSibling.innerHTML);
    document.querySelector("#total_price").innerHTML = total_price;
};

function add_one(e) {
    var prev = parseInt(e.nextSibling.nextSibling.innerHTML);
    var cur = parseInt(++e.nextSibling.nextSibling.innerHTML);
    num_item++;
    document.querySelector("#total_item").innerHTML = num_item;
    e.parentNode.lastChild.previousSibling.innerHTML = (parseFloat(e.parentNode.lastChild.previousSibling.innerHTML) * cur / prev).toFixed(2);

    total_price = parseFloat(total_price) + parseFloat(e.parentNode.lastChild.previousSibling.innerHTML / cur);
    total_price = total_price.toFixed(2);
    document.querySelector("#total_price").innerHTML = total_price;
};

function sub_one(e) {
    var element = e.previousSibling.previousSibling;
    var prev = parseInt(element.innerHTML);
    var cur = parseInt(--element.innerHTML);
    if (element.innerHTML < 1) {
        element.innerHTML = 1;
        return
    }
    e.parentNode.lastChild.previousSibling.innerHTML = (parseFloat(e.parentNode.lastChild.previousSibling.innerHTML) * cur / prev).toFixed(2);
    num_item--;
    if (num_item < 1) {
        num_item = 1;
    }
    document.querySelector("#total_item").innerHTML = num_item;

    total_price = parseFloat(total_price) - parseFloat(e.parentNode.lastChild.previousSibling.innerHTML / cur);
    total_price = total_price.toFixed(2);
    document.querySelector("#total_price").innerHTML = total_price;
};

function cancel(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

    num_item -= e.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    document.querySelector("#total_item").innerHTML = num_item;

    total_price = parseFloat(total_price) - parseFloat(e.parentNode.lastChild.previousSibling.innerHTML);
    total_price = total_price.toFixed(2);
    document.querySelector("#total_price").innerHTML = total_price;
};
