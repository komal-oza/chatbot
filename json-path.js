const btn = document.getElementById('getpath');

btn.addEventListener("click", generateJsonPath);

function generateJsonPath(json, path = '', paths = []) {
    if (typeof json !== 'object' || json === null) {
      paths.push(path);
      return;
    }
  
    if (Array.isArray(json)) {
      json.forEach((item, index) => {
        generateJsonPath(item, `${path}[${index}]`, paths);
      });
    } else {
      Object.keys(json).forEach((key) => {
        const newPath = path ? `${path}.${key}` : key;
        generateJsonPath(json[key], newPath, paths);
      });
    }
    return paths;
  }

  let api_response = document.querySelector('[data-json-response-body]').innerText;
  // Example JSON response
//   const jsonResponse = {
//     name: 'John',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       state: 'NY',
//     },
//     hobbies: ['reading', 'painting', 'coding'],
//   };
  
  // Generate JSON paths
  const jsonPaths = generateJsonPath(api_response);
  
  // Print JSON paths
  console.log(jsonPaths);


