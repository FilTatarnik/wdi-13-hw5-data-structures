console.log("works");
//--------DATA TYPES----------//Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
// A light switch that can be either on or off.
// --Boolean, light on = true, light off = false
// A user's email address.
//--string, "email@email.com"
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//--object, const spaceship = {
	// prop: "hull",
	// prop: "laser blasters", 
	// prop: "tracor beam",
	// prop: "warp drive"
// }
// A list of student names from our class.
// array, const students = [student1, student2, student3];
// A list of student names from our class, each with a location.
// -- object
// const studentNames = {
// 	location: "#"
// }
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// --object
// const studentNames = {
// 	location: "#",
// 	favTv: "#"
// }
//---------Take it easy-----------//
// Make an array that holds all of the colors of the rainbow.
const rainColors = ["red", "orange", "yellow", "green", "blue", "voilet"];
// Write code that will access "blue" from the rainbow array.
console.log(rainColors[4]);
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const fil = {
	food: "steak",
	hobby: "programming",
	town: "bartlett",
	favdatatype: "string"
}
// Write code that will access your hobby from the object that you just created.
console.log(fil.hobby);
