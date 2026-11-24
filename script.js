document.getElementById("addBtn").onclick = function() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    if (name == "" || amount == "") {
        alert("Please enter all details");
    }
    else {
        document.getElementById("expenseName").innerText = name;
        document.getElementById("expenseAmount").innerText = amount;
        document.getElementById("expenseCategory").innerText = category;
    }
};
document.getElementById("delBtn").onclick = function() {
    document.getElementById("expenseName").innerText = "0";
    document.getElementById("expenseAmount").innerText = "0";
    document.getElementById("expenseCategory").innerText = "0";

};
