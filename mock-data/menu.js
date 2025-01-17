const menuList = [
    {
        id: 1000,
        title: "Project Management",
        submenu: [
            { id: 1001, title: "Project Management Professional (PMP)® Certification Training", href: "pages/Project-Management/PMP-Certification-Training.html" },
            { id: 1002, title: "CAPM® Certification Training", href: "#" },
            { id: 1003, title: "PgMP® Certification Training", href: "#" },
            { id: 1004, title: "Prince 2® Foundation and Practitioner Certification Training", href: "#" },
            { id: 1005, title: "PMI-RMP® Certification Training", href: "#" }
        ]
    },
    {
        id: 2000, 
        title: "SAFe",
        submenu: [
            { id: 2001, title: "Leading SAFe® 6.0 Training", href: "#" },
            { id: 2002, title: "SAFe® 6.0 Scrum Master (SSM) Certification Training", href: "#" },
            { id: 2003, title: "Lean Portfolio Management (LPM) Certification Training", href: "#" },
            { id: 2004, title: "SAFe® 6.0 Product Owner Product Manager Certification Training", href: "#" }
        ]
    },
    {
      id: 3000, 
      title: "Lean and Six Sigma",
      submenu: [
        { id: 3001, title: "Lean Six Sigma Green Belt Certification", href: "#" },
        { id: 3002, title: "Lean Six Sigma Black Belt Certification", href: "#" },
        { id: 3003, title: "Lean Six Sigma Yellow Belt Certification Training", href: "#" }
      ]
    },
    {
      id: 4000, title: "Agile and Scrum",
      submenu: [
        { id: 4001, title: "Certified Scrum Master® (CSM)", href: "#" },
        { id: 4002, title: "Certified Scrum Product Owner (CSPO)", href: "#" },
        { id: 4003, title: "PMI-ACP® Certification", href: "#" }
      ]
    },
    {
      id: 5000, title: "IT Service and Architecture",
      submenu: [
        { id: 5001, title: "ITIL® 4 Foundation Training", href: "#" }
      ]
    },
    {
      id: 6000, title: "One Day Courses",
      submenu: [
        { id: 6001, title: "Agile and Scrum", href: "#" },
        { id: 6002, title: "Business Case Writing", href: "#" },
        { id: 6003, title: "Conflict Management", href: "#" },
        { id: 6004, title: "Change Management", href: "#" },
        { id: 6005, title: "Project Management Techniques", href: "#" }
      ]
    },
    {
        id: 7000, title: "Information Security",
      submenu: []
    },
    {
      id: 8000, title: "DevOps and Salesforce",
      submenu: [
        { id: 8001, title: "DevOps Certification Training", href: "#" },
        { id: 8002, title: "DevOps Leader Certification Training", href: "#" },
        { id: 8003, title: "Salesforce Administrator Certification Training", href: "#" },
        { id: 8004, title: "Salesforce Certification Training Admin 201 and App Builder", href: "#" },
        { id: 8005, title: "Salesforce App Builder Certification Training", href: "#" }
      ]
    },
    {
      id: 9000, title: "Analytics and Data Management",
      submenu: [
        { id: 9001, title: "Data Science Certification Training", href: "#" },
        { id: 9002, title: "Big Data Hadoop Developer Certification Training", href: "#" },
        { id: 9003, title: "Big Data Hadoop Administrator Certification Training", href: "#" }
      ]
    },
    {
      id: 10000, title: "Cloud Computing",
      submenu: [
        { id: 10001, title: "Certified Digital Marketing Professional Training", href: "#" }
      ]
    }
  ];
  
function generateMenuHTML() { 
    let html = `<li class="nav-item dropend"><a class="dropdown-item" href="courses.html">All Courses</a></li>`; 
    menuList.forEach(item => { 
        if (item.submenu && item.submenu.length > 0) { 
            html += ` <li class="nav-item dropend"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${item.title} </a> <ul class="dropdown-menu">`; 
            item.submenu.forEach(subItem => { 
                html += `<li><a class="dropdown-item" href="${subItem.href}">${subItem.title}</a></li>`; 
            }); 
            html += `</ul></li>`; 
        } else { 
            html += `<li class="nav-item dropend"><a class="nav-link dropdown-toggle" href="${item.href || '#'}">${item.title}</a></li>`; 
        } 
    }); 
    return html; 
} 
const htmlStructure = generateMenuHTML();
document.getElementById("dropdown-courses-menu").innerHTML = htmlStructure
  