const request = require('request')

function call_api(inputText) {
  const options = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '54523f2d11msh4eaa24da65900c6p1f3717jsn48bde874ef56',
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
      useQueryString: true
    },
    body: {
      from: 'en',
      to: 'es',
      e: '',
      q: [inputText]
    },
    json: true
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(`statusCode: ${response.statusCode}`);
    console.log(body);
  });

}

call_api('Hello World')





// const options = {
//   method: 'POST',
//   url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '54523f2d11msh4eaa24da65900c6p1f3717jsn48bde874ef56',
//     'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
//     useQueryString: true
//   },
//   body: {
//     from: langFrom,
//     to: langTo,
//     e: '',
//     q: [inputText]
//   },
//   json: true
// };

// function call_api () {
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(`statusCode: ${response.statusCode}`);
  //   console.log(body);
  // });
// }

// call_api()

// const callback = call_api()
