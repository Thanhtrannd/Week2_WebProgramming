if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const SubmitButton = document.getElementById("submit-data");
  const EmptyButton = document.getElementById("empty-table");
  const DatabaseTable = document.getElementById("database");
  const UsernameField = document.getElementById("input-username");
  const EmailField = document.getElementById("input-email");
  const AddressField = document.getElementById("input-address");
  const AdminField = document.getElementById("input-admin");
  const ImageField = document.getElementById("input-image");

  SubmitButton.addEventListener("click", function () {
    let UserRow = "none";
    UserRow = UserChecked(DatabaseTable, UsernameField.value);

    let admin;
    admin = isAdmin(AdminField);

    var img = document.createElement("img");
    if (typeof ImageField.files[0] !== "undefined") {
      let imgFile = ImageField.files[0];
      console.log(ImageField.files[0]);
      let imgUrl = URL.createObjectURL(imgFile);
      img.src = imgUrl;
      img.width = 64;
      img.height = 64;
    }

    if (UserRow === "none") {
      var row = DatabaseTable.insertRow(-1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerText = UsernameField.value;
      cell2.innerText = EmailField.value;
      cell3.innerText = AddressField.value;
      cell4.innerText = admin;
      cell5.appendChild(img);
    } else {
      UserRow.cells[1].innerText = EmailField.value;
      UserRow.cells[2].innerText = AddressField.value;
      UserRow.cells[3].innerText = admin;
      UserRow.cells[4].innerHTML = "";
      UserRow.cells[4].appendChild(img);
    }
  });

  EmptyButton.addEventListener("click", function () {
    var EmptyTable = document.createElement("tbody");
    var OldTable = document.getElementById("databasebody");
    OldTable.parentNode.replaceChild(EmptyTable, OldTable);
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

function UserChecked(Database, newUser) {
  let rowNo = "none";
  let rows = document.getElementsByTagName("tr");
  for (var row of rows) {
    let user = row.cells[0].innerText;
    console.log(user);
    console.log(newUser);
    if (user === newUser) {
      rowNo = row;
      break;
    }
  }
  return rowNo;
}
