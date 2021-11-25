// Create query String (URL parameters)

var queryString = new URLSearchParams({
  search: "project",
  by: "week",
  limit: 10,
});
console.log(queryString.toString()); // search=project&by=week&limit=10


// Convert query string to object

var queryStringToObject = new URLSearchParams(queryString.toString());
console.log(queryStringToObject); // URLSearchParams { 'search': 'project', 'by': 'week', 'limit': '10' }


// Made by Adegoke Temitope 🌟