#!/usr/bin/env node
import greeting from "../src/cli.js"
import gameIsEven from "./brain-even.js"
import gameCalc from "./brain-calc.js";

console.log("Welcome to the Brain Games!")
const name = greeting();
//gameIsEven(name);
gameCalc(name);
