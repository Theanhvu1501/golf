const apiURL = "https://script.googleusercontent.com/macros/echo?user_content_key=C2JRuuWQXzp2Id0XskJFiCs_RcC6Yj9FVHMykPZJjduMoAjllnUspdNxvEPsb5ACVMC1wlBuwuYEVja1s8aDUjCL11_Pmp7Jm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJu3NZNr3KrmbqVKqE-BiBg1m1X_UmLKAh5ouNLWUNy4YQfWQIGnHoxR0G_l_Qs6aezEcWf5rZE1K0MvrSzbxwkAItJRyU34Pw&lib=MkIJTBWEIIkYPOwrkRRmbNeTimEVDJMol";

$(document).ready(() => {
  initData();
});

const initData = () => {
  $.get({
    url: apiURL,
    success: function (data) {
      appendTable(data.data);
    },
  });
};

const appendTable = (list) => {
  $("#loading").hide();
  var tableBody = document.getElementById("tableBody");

  list.forEach((item, index) => {
    if (item.name && item.vga) {
      // Create row element
      let row = document.createElement("tr", {
        className: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-[80px] shadow-lg cursor-pointer",
      });

      // Create cells
      let c1 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });
      let c2 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });
      let c3 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });
      let c4 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });

      let c5 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });
      let c6 = document.createElement("td", {
        className: "p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]",
      });

      c1.innerText = index + 1;
      c2.innerText = item.vga;
      c3.innerText = item.name;
      c4.innerText = "-";
      c5.innerText = "-";
      c6.innerText = "-";
      // Append cells to row
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);
      row.appendChild(c6);
      tableBody.appendChild(row);
    }
  });
};
