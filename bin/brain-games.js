#!/usr/bin/env node
import greeting from "../src/cli.js"
import gameIsEven from "./brain-even.js"

console.log("Welcome to the Brain Games!")
const name = greeting();
gameIsEven(name);
