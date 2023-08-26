import React from "react";
import ProjectItem from "./ProjectItem";

function Myproject() {
  const string1 = "Romo"; //string
  const number1 = 2; //number
  const boolean1 = true; // boolean
  const arrayNumbers = [221, 332, 13, 24]; // array of numbers
  const arrayString = ["1", "Test", "num", "4"]; // array of strings
  const arrayBoolean = [true, false, true, false]; // array of booleans

  const object = {
    name: "romo", // string
    dificulty: 1, // number
    time: "3", //string
    isTrue: true, // boolean
    friends: ["tom", "jerry"], // array of string
  }; // object

  const arrayObject = [
    {
      name: "romo", // string
      dificulty: 1, // number
      time: "3", //string
      isTrue: true, // boolean
      friends: ["tom", "jerry"], // array of string
    }, // object
    {
      name: "rangon", // string
      dificulty: 10, // number
      time: "3", //string
      isTrue: false, // boolean
      friends: ["tomas", "jay"], // array of string
    }, // object
    {
      name: "rono", // string
      dificulty: 10, // number
      time: "3", //string
      isTrue: false, // boolean
      friends: ["tomas", "jay"], // array of string
    }, // object
  ]; // arrayObject

  console.log(arrayNumbers);
  console.log(arrayNumbers[0]);
  console.log(arrayString[1]);
  console.log(object);
  console.log(object.name);
  console.log(object.time);
  console.log(object.friends[1]);
  console.log(arrayObject);
  console.log(arrayObject[1].dificulty);
  console.log(arrayObject[1].friends[1]);
  console.log(arrayObject.length);
  console.log(arrayBoolean.length);
  console.log(arrayBoolean[arrayBoolean.length - 1]); // to get last data of the array
  console.log(arrayObject[arrayObject.length - 1]);
  return (
    <div className="myprojectcontainer">
      <ProjectItem name={arrayObject[0].name} dificulty="20" time="30" />
      <ProjectItem name={arrayObject[1].name} dificulty="10" time="20" />
      <ProjectItem name={arrayObject[2].name} dificulty="12" time="10" />
    </div>
  );
}

export default Myproject;
