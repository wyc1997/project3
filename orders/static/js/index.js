var order_data;
var presented = "tab_piz";
var subs_data;
var pasta_data;
var salad_data;
var dinner_platter_data;
var topping_data;
var num_item = 0;
var total_price = 0.0

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
    document.querySelectorAll(".add_order_butt").forEach(button => {
        button.onclick = () => {
            var data = document.querySelectorAll(`.${button.id}`);
            document.querySelector("#ver_table_right").innerHTML += document.querySelector("#order_list_item_1").innerHTML;

            document.querySelector("#order_list_span_name").innerHTML = data[0].innerHTML;
            document.querySelector("#order_list_span_name").id = `order_list_span_name_${data[0].innerHTML.replace(" ", "_")}`;

            document.querySelector("#tr_0").id = `tr_${data[0].innerHTML}`;
            document.querySelector("#qty").id = `qty_${data[0].innerHTML.replace(" ", "_")}`;

            total_price += parseFloat(data[1].innerHTML.substring(1));

            num_item++;
            document.querySelector("#total_item").innerHTML = num_item;
        }
    })

};

function add_one(e) {
    e.nextSibling.nextSibling.innerHTML++;
    num_item++;
    document.querySelector("#total_item").innerHTML = num_item;

};

function sub_one(e) {
    var element = e.previousSibling.previousSibling;
    element.innerHTML--;
    if (element.innerHTML < 1) {
        element.innerHTML = 1;
    }
    num_item--;
    if (num_item < 1) {
        num_item = 1;
    }
    document.querySelector("#total_item").innerHTML = num_item;
};

function cancel(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    num_item -= e.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    document.querySelector("#total_item").innerHTML = num_item;
};
