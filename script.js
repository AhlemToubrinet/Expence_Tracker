const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('name-box');
const dateInput = document.getElementById('date-box');
const amountInput = document.getElementById('amount-box');
const tableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');


let expenses = [];
let totalAmount = 0;

addBtn.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    const name = nameInput.value;
    const date = dateInput.value;
    if(name == "" || date == "" || amount == ""){
        alert("You Must Fill All The fields");
        return;
    }else if(amount<=0){
        alert("Please Add A Valid Amount");
        return;
    }else{
        expenses.push({name,date,amount});
        totalAmount+=amount;
        totalAmountCell.textContent = totalAmount;

        const newRow = tableBody.insertRow();
        
        const nameCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();

        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () =>{
            expenses.splice(expenses.indexOf(expense),1);

            totalAmount-=expense.amount;
            totalAmountCell.textContent = totalAmount;

            tableBody.removeChild(newRow);
        });

        const expense = expenses[expenses.length -1];
        nameCell.textContent = expense.name;
        dateCell.textContent = expense.date;
        amountCell.textContent = expense.amount;

        deleteCell.appendChild(deleteBtn);

        
    }
});



