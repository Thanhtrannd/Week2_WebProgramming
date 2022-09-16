if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

let noteCounter = 0;

function initializeCode() {
  const SubmitButton = document.getElementById("submit-data");
  const EmptyButton = document.getElementById("empty-table");
  const DatabaseTable = document.getElementById("database");

  SubmitButton.addEventListener("click", function () {
    const UsernameField = document.getElementById("input-username");
    const EmailField = document.getElementById("input-email");
    const AddressField = document.getElementById("input-address");
    const AdminField = document.getElementById("input-admin");

    var row = DatabaseTable.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    let admin;
    admin = isAdmin(AdminField);

    cell1.innerText = UsernameField.value;
    cell2.innerText = EmailField.value;
    cell3.innerText = AddressField.value;
    cell4.innerText = admin;
  });

  EmptyButton.addEventListener("click", function () {
    var EmptyTable = document.createElement("tbody");
    DatabaseTable.parentNode.replaceChild(EmptyTable, DatabaseTable);
  });
}

function isAdmin(checkbox) {
  let checked;
  let Admin;
  checked = checkbox.checked;
  if (checked) {
    Admin = "X";
  } else {
    Admin = "-";
  }
  return Admin;
}
