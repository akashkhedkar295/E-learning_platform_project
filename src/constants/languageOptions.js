export const languageOptions ={
    "script.c":{
      id: 48,
      language: "c",
      name: "script.c",
      lable: "C ",
      value: `// Basic Syntax of C Program
#include <stdio.h>

// main function
int main()
{

  // body
  printf("Hi! This is a basic C program.");

  // return statement
  return 0;
}
      `
  }, 
  "script.cpp":{
      id: 52,
      language: "cpp",
      name: "script.cpp",
      lable: "C++ ",
      value:`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}`
    },
    "script.cs":{
      id: 51,
      language: "csharp",
      name: "script.cs",
      lable: "C# (C-SHARP) ",
      value:`using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`
    },
    "script.go":{
      id: 95,
      language: "go",
      lable: "GO",
      name: "script.go",
      value: `package main
import ("fmt")

func main() {
  fmt.Println("Hello World!")
}`
    },
    "script.java":{
      id: 91,
      language: "java",
      name: "script.java",
      lable: "Java",
      value:`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
    },
    "script.js":{
      id: 93,
      language: "javascript",
      name: "script.js",
      lable: "JavaScrip",
      value:`console.log("hello");`
    },
    "script.kt":{
      id: 78,
      language: "kotlin",
      name: "script.kt",
      lable: "Kotlin",
      value:`fun main() {
  println("Hello World")
}`
    },
    "script.php":{
      id: 68,
      language: "php",
      name: "script.php",
      lable: "PHP",
      value:`<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>`
    },
    "script.py":{
      id: 92,
      language: "python",
      name: "script.py",
      lable: "Python",
      value: "print(Hello World !)"
    },
    "script.R":{
      id: 80,
      language: "r",
      name: "script.R",
      lable: "R",
      value: `name <- "John Doe"
print(name)`
    },
    "script.rb":{
      id: 72,
      language: "ruby",
      name: "script.rb",
      lable: "Ruby",
      value:`# this line will print "Hello World!" as output. 
puts "Hello World!"; 
`
    },
    "script.SQL":{
      id: 82,
      language: "sql",
      name: "script.SQL",
      lable: "SQL",
      value:`SELECT * FROM Customers;`
    },
    "script.swift":{
      id: 83,
      language: "swift",
      name: "script.swift",
      lable: "Swift",
      value: `// Swift program to illustrate the use of semicolon 
import Swift 

var x = "GeeksforGeeks"; print(x)
`
    },
    "script.TS":{
      id: 94,
      language: "typescript",
      name: "script.TS",
      lable: "TypeScript",
      value: `let firstName: string = "Dylan"; // type string

firstName = 33; // attempts to re-assign the value to a different type

console.log(firstName);`
    },

    "script.html":{
      id: null,
      language: "html",
      name: "script.html",
      lable: "HTML",
      value:`<!DOCTYPE html>
      <html>
      <body>
      
      <h1>My First Heading</h1>
      
      <p>My first paragraph.</p>
      
      </body>
      </html>`
    },
}
