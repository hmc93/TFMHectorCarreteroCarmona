const mongoose = require("mongoose");
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
const terminalSchema = new mongoose.Schema({
    serNum: {
        type: String, //este numero vamos a simular o a autogenerarlo, pero tiene que ser único
        required: true,
        unique: true,
        minLength: 3, //12?
        maxLength: 3, //12? //quiza esto se haga con match? match: RegExp, creates a validator that checks if the value matches the given regular expression
    },
    username: {
        type: String,
        required: true,
        //hay que hacer un validator para comprobar si el usuario existe antes de asociarlo, con un find.
        /*     unique: true, 
            minlength:3, 
            maxlength: 24 */
    },
    pacientFirstName: {
        type: String,
        minlength: 3,
        maxlength: 24,
        default: "Empty"
    },
    pacientLastName: {
        type: String,
        minlength: 3,
        maxlength: 24,
        default: "Empty"
    },
    pacientAge: {
        type: Number,
        default: 0
    },
    pacientHeight: {
        type: Number,
        default: 0
    },
    pacientGender: {
        type: String,
        enum: ['M', 'F', 'N'],
        default: 'N'
    },
    intakes: {
        intake_1: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_2: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_3: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_4: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_5: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_6: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_7: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_8: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_9: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_10: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_11: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_12: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_13: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_14: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_15: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_16: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_17: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_18: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_19: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_20: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        },
        intake_21: {
            id: {
                type: String 
            },
            number: {
                type: String
            },
            date: {
                type: Date
            },
            med: {
                type: String
            },
            state: {
                type: String,
                enum: ['F','O','P','T'],
                default: 'F'
            }
        }
    }
});

terminalSchema.statics.getIntakes = async (serNum) => {
    const formatOutput = (intakes) => {
        let formattedIntakes = intakesModel
        //console.log(formattedIntakes)
        let i
        let formattedDate = ""
        let formattedHour=""
        let year=""
        let month=""
        let day=""
        let hour=""
        let minutes=""
        for (i=1; i < 22; i++) {
            day = String(intakes["intake_" + i]["date"].getDate())
            /* console.log(day) */
            year = String(intakes["intake_" + i]["date"].getFullYear())
           /*  console.log(year) */
            month = String(intakes["intake_" + i]["date"].getMonth() + 1)
          /*   console.log(month) */
            hour = String(intakes["intake_" + i]["date"].getHours())
         /*    console.log(hour) */
            minutes = String(intakes["intake_" + i]["date"].getMinutes())
       /*      console.log(minutes) */
            formattedDate = String(day+"-"+month+"-"+year)
            formattedHour= String(hour+":"+minutes)
            formattedIntakes["intake_" + i]["id"] = intakes["intake_" + i]["id"]
            formattedIntakes["intake_" + i]["number"] = intakes["intake_" + i]["number"]
            formattedIntakes["intake_" + i]["state"] = intakes["intake_" + i]["state"]
            formattedIntakes["intake_" + i]["med"] = intakes["intake_" + i]["med"]
            formattedIntakes["intake_" + i]["date"] = formattedDate
            formattedIntakes["intake_" + i]["hour"] = formattedHour
            //console.log(delete formattedIntakes["intake_"+i]["date"])
            //delete formattedIntakes["intake_"+i]["hour"]
            //if (i === 21) console.log(formattedIntakes)
            /* formattedIntakes["intake_" + i]["date"] = formattedDate
            formattedIntakes["intake_" + i]["hour"] = formattedHour */
            //if (i === 21) console.log(formattedIntakes)
        }
        //console.log(formattedIntakes)
        return formattedIntakes
    }
    const terminal = await Terminal.findOne({serNum});
    if (!terminal){
        throw new Error ('Terminal not found');
    }
    const outputIntakes = await formatOutput(terminal.intakes)
    return outputIntakes;
    //Aqui se debería hacer la validación de la contraseña contra el hash
}
terminalSchema.statics.setIntakes = async (serNum, data) => { 
    const formatInput = (data) => {
        let i
        let newData = data;
        let year=0
        let month=0
        let day = 0
        let hour = 0
        let minute = 0
        for (i=1; i < 22; i++) {
            year = Number(data["intake_"+i]["date"].split("-")[2])
            month = Number(data["intake_"+i]["date"].split("-")[1]) - 1
            day = Number(data["intake_"+i]["date"].split("-")[0])
            hour = Number(data["intake_"+i]["hour"].split(":")[0])
            minute = Number(data["intake_"+i]["hour"].split(":")[1])
            date = new Date(year, month, day, hour, minute)
            newData["intake_"+i]["date"] = date
            delete newData["intake_"+i]["hour"]
        }
        return newData
    }
    const orderInput = (data) => {
        let dataArray = []
        let i
        for (i = 1; i < 22; i++){
            dataArray.push(data["intake_" + i])
        }
        dataArray.sort(function(d,d2){return d["date"].getTime() - d2["date"].getTime()})
        let orderedData = intakesModel
        for (var j in dataArray) {
            index = Number(j) + 1
            orderedData["intake_" + String(index)] = dataArray[j]
            orderedData["intake_" + String(index)]["id"] = String(index)
            orderedData["intake_" + String(index)]["number"] = String(index)
        }
        return orderedData
    }

  
    const formattedData = await formatInput(data)
    const orderedData = await orderInput(formattedData)
    //console.log(orderedData)
    const filter = {"serNum": serNum }
    const update = {"intakes": orderedData}
    let terminal = await Terminal.findOneAndUpdate(filter, update);
    if (!terminal){
        throw new Error ('Terminal not found');
    }
    terminal = await Terminal.findOne({serNum})
    return terminal.intakes;
    //Aqui se debería hacer la validación de la contraseña contra el hash
}
const Terminal = mongoose.model("Terminal", terminalSchema);
module.exports = Terminal;