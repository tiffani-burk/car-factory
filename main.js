// Your job is to create the following functions. Each function should add a property to the chassis. Please use the function names and property names listed.

// The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
// The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.
// The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.
// The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
// Make sure you invoke each function, store the returned object in a variable, and then use console.log() to ensure that each of your little minions is doing its job correctly.

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it

	return chassisObject}

const createChassis = () => {
        // Create a new object. No properties yet.
        const newChassisObject = {	}
    
        return newChassisObject
    }

const addWheels = (chassisObject) => {
chassisObject.wheels =4
return chassisObject
}

const addEngine = (chassisObject) => {
chassisObject.engine = '4.8L'
return chassisObject
}

const addSteeringWheel = (chassisObject) => {
chassisObject.steelingwheel = 'Tilting'
return chassisObject
}

const addDriveTrain = (chassisObject) => {
chassisObject.drivetrain = 'Two Wheel Drive'
return chassisObject
}

let myChas = createChassis()
addWheels(myChas)
addEngine(myChas)
addSteeringWheel(myChas)
addDriveTrain(myChas)

console.log(myChas)

