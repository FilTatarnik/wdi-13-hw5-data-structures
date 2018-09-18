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
//---------Crazy Object!-------------//
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// Use crazyObject to log the following.

// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

//---------Object-ception-------------//
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception);



































