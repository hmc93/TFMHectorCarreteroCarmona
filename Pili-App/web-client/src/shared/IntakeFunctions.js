const axios = require('axios').default
//let INTAKES = [{ id: '1', number: '1', date: '2020-05-1', hour: '15:30', med: 'Omeoprazol' }, { id: '2', number: '2', date: '2020-05-2', hour: '9:30', med: 'Aspirina' }]

let INTAKES = []

const intakesModel = {
  "intake_1": {
    "id": "1",
    "number": "1",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_2": {
    "id": "2",
    "number": "2",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_3": {
    "id": "3",
    "number": "3",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_4": {
    "id": "4",
    "number": "4",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_5": {
    "id": "5",
    "number": "5",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_6": {
    "id": "6",
    "number": "6",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_7": {
    "id": "7",
    "number": "7",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_8": {
    "id": "8",
    "number": "8",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_9": {
    "id": "9",
    "number": "9",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_10": {
    "id": "10",
    "number": "10",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_11": {
    "id": "11",
    "number": "11",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_12": {
    "id": "12",
    "number": "12",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_13": {
    "id": "13",
    "number": "13",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_14": {
    "id": "14",
    "number": "14",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_15": {
    "id": "15",
    "number": "15",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_16": {
    "id": "16",
    "number": "16",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_17": {
    "id": "17",
    "number": "17",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_18": {
    "id": "18",
    "number": "18",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_19": {
    "id": "19",
    "number": "19",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_20": {
    "id": "20",
    "number": "20",
    "date": "",
    "hour": "",
    "med": ""
  },
  "intake_21": {
    "id": "21",
    "number": "21",
    "date": "",
    "hour": "",
    "med": ""
  }
}


const editIntake = (newIntake) => {
  const index = newIntake.number - 1
  INTAKES[index] = newIntake
  // puedes modificarlo INTAKES.push({hola:"Quétal"})
  //console.log(newIntake)
  //console.log(TEMINTAKES)
}

/* const fetchIntakes = async (serNum) => {
    const data = {
      "setNum": serNum
    }
    const headers = new Headers();
    headers.append("X-Powered-By", "Express");
    headers.append("Connection", "keep-alive");
    headers.append("Content-Type", "application/json; charset=utf-8");
    const options = {
      method: 'POST',
      port: '80',
      mode: 'cors',
      headers: headers,
      cache: 'default',
      body: JSON.stringify(data)
    };
    try {
      const intakes = await fetch("http://localhost/getIntakes", options)
      console.log("Here they come the intakes!")
      console.log(intakes.json)
    } catch (e){
      console.log(e)
    }
} */

/* const fetchIntakes = async (serNum) => {
  const data = {
    "setNum": serNum
  }
  axios
    .post('/getIntakes', data)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
} */

const fetchIntakes = async (serNum) => {
  const data = {
    serNum: serNum
  }
  //const message = JSON.stringify(data)
  const intakesList = []
  axios
    .post('http://127.0.0.1:80/getIntakes', data)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      let index
      for (var i in res.data) {
        index = i.split("_")[1];
        intakesList.push(res.data["intake_" + index])
      }
      //console.log(res.data)
      console.log(intakesList)
      return intakesList;
    })
    .catch(error => {
      console.error(error)
      return intakesList;
    })
}

const setFetchedIntakes = async function (res) {
  const newIntakes = []
  for (var i in res.data) {
    newIntakes.push(res.data["intake_" + i.split("_")[1]])
  }
  return newIntakes
}

const setSentIntakes = async function (intakesArray) {
  let newIntakes = intakesModel;
  let index
  //console.log("setSentIntakes")
  //console.log(intakesArray)
  //console.log(newIntakes)
  for (var i in intakesArray) {
    //console.log(i)
    index = Number(i) + 1
    //console.log(index)
    newIntakes["intake_" + String(index)] = intakesArray[i]
    //console.log(newIntakes)
  }
  return newIntakes
}
/* const fetchIntakes = () => {


var request = require('request');
var options = {
  'method': 'POST',
  'url': '/getIntakes',
  'headers': { //quitar el application/json?
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"serNum":"014"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
} */

export { INTAKES, editIntake, fetchIntakes, setFetchedIntakes, intakesModel, setSentIntakes }