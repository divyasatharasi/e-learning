$(document).ready(function() {
    // Get the query string 
    const queryString = window.location.search;
    // Parse the query string 
    const urlParams = new URLSearchParams(queryString); 
    const data = urlParams.get('id'); 
    const selectedSession = sessionList.find(s=> s.id === Number(data))
    document.getElementById('ordersummary-course-head').textContent = selectedSession.id
    
});