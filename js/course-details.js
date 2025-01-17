let selectedSession = {}
function loadCities() {
   const countryDropdown = document.getElementById('countryDropdown');
   const cityDropdown = document.getElementById('cityDropdown');
   const selectedCountry = countryDropdown.value; 
   cityDropdown.innerHTML = '<option value="">Select City</option>'; 
   // Clear previous options 
   if (selectedCountry) { 
      const cities = cityList[selectedCountry]; 
      cities.forEach(city => { 
          const option = document.createElement('option'); 
          option.value = city.city; option.textContent = city.city; 
          cityDropdown.appendChild(option); 
      }); 
      cityDropdown.disabled = false; // Enable city dropdown 
  } else { 
      cityDropdown.disabled = true; // Disable city dropdown if no country is selected 
  } 
}

function showSessionList() { 
    const ddCountry = document.getElementById('countryDropdown').value; 
    const ddCity = document.getElementById('cityDropdown').value; 
    const ddMonth = document.getElementById('monthDropdown').value; 
    console.log('asd 1', ddCountry, ddCity, ddMonth)

    // Assuming `sessionList` is already defined in `data.js`
    var sessionTableBody = $('#sessions-table-body');
        
    $.each(sessionList, function(index, session) {

        var col1 = `<div class="session-col-1"> <p> ${session.startdate} </p> - <p> ${session.enddate} </p> </div><div class="session-col-1"><p> Country </p> : <p> ${session.country} </p> </div>`

        var col2 = `<div class="session-col-1"> <p> ${session.starttime} </p> - <p> ${session.endtime} </p> </div>`

        var col3 = `<div class="session-col-1"> <p class="popupdatetext" style="margin-left: 5px;">USD <del>${session.price}</del><span class="popupofferprice">${session.offerprice}</span></p> </div> <div class="session-col-1"><p> ${session.weektype} </p> </div></div>`

        // var btnCol = `<button class="btn btn-primary" onclick="setSelectedSessionDetails('${ddCountry}', '${ddCity}', '${ddMonth}', ${session.id})">Enroll</button>`
        var btnCol = `<a class="btn btn-primary" href="../../cart.html?id=${session.id}">Enroll</a>`

        selectedSession.id=session.id

        var row = $('<tr></tr>');
        row.append($('<td></td>').html(col1));
        row.append($('<td></td>').html(col2));
        row.append($('<td></td>').html(col3));
        row.append($('<td></td>').html(btnCol));
        sessionTableBody.append(row);
    });
}

// function setSelectedSessionDetails(ddCountry, ddCity, ddMonth) {
//     console.log("asd 2", ddCountry, ddCity, ddMonth, selectedSession.id)
//     window.location.href = '../../cart.html';
// }