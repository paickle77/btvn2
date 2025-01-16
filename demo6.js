const dumpProps = (obj, objName) => {
    let result = "";
    for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}\n`
    }
    console.log(result)
    }
    const myCar = {make: "Ford", model: "Mustang"}
    dumpProps(myCar, "car")