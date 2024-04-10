                                       //STRING METHOD      
                        //    question 1

// var firstName=prompt("enter your first name");
// var lastName=prompt("enter your second nam");
// var fullName = firstName+"  " +lastName
// console.log(fullName);

                                       //question 2

// var mobileChoice=prompt("favourite mobile phone model") ;
// var lengthOfInput = mobileChoice.length;
// document.write("my favourite phone is:"+mobileChoice+ "</br>") ;
// document.write("lenght of string:"+lengthOfInput)

                                      // question 3

// var word="pakistan";
// var indexOfN= word.indexOf("n") ;
// document.write(`string ${word} <br>`);
// document.write          (`index is:${indexOfN}`)

                                    // question 4

// var word= "hello world";
// var lastWord= word.lastIndexOf("l");
// document.write(`string : ${word} <br>`)
// document.write(`last index of "l" is :${lastWord}`)

                                        // question 5

// var word = "pakistan";
// var indexOfN = word.charAt("3");
// document.write(`string :${word} <br>`);
// document.write(`character in index 3:${indexOfN}`);

                             //       question 6


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// console.log(fullName);

                                    // question 7

// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("Original word: " + word + "<br>");
// document.write("After replacement: " + replacedWord);

                                 // question 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g, "&");
// document.write(replaced);
                          
                              // question 8

//  var str = "472";
// var num = Number(str);
// document.write(`value:${str} <br>`)
// document.write( `value:${typeof str} <br>`)
// document.write(` value:  + num + <br>`);
// document.write( `value:  + typeof num`);
                             
                             // question 9
// var userInput = prompt("Enter a string:");
// var capitalizedInput = userInput.toUpperCase();
// document.write("Capitalized Input: " + capitalizedInput);

                                 // quesdtion 11
// var userInput = prompt('Enter a word');
// var firstLetter = userInput.slice(0,1).toUpperCase();
// var remainingletter = userInput.slice(1).toLowerCase();
// var final = firstLetter + remainingletter;
// // var covertCapital = userInput.toLocaleUpperCase();
// document.write(`User input: ${userInput}<br>Title case: ${final}<br>`);

                               //   question 12
// var num = 35.36;
// var numAsString = num.toString().replace(".", "");
// document.write(`numnber: ${num}<br>`);
// document.write(`Result:  ${numAsString}`);


                               
                                // question 13

// var username = prompt('Enter a username: ');
// if(username.includes('@') || username.includes('!') || username.includes('.') || username.includes(',')){
//     alert(`${username} is not valid.\n Please enter a valid username`);
// }else{
//     alert(`Username is valid`);
// }

                                // question 14
// var items = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var match = false;

// for(i=0; i<=items.length; i++){
//     if(user == items[i]){
//         document.write(`${user} is available at index ${i}`);
//         match = true
//         break
//     }
// }if(!match){
//     document.write(`We are sorry ${user} is not available in our bakery`);
// }
// document.write("<br><br>")



                                //question 15
// function validatePassword() {
//     let password;
//     do {
//         password = prompt("Enter your password:");
//         if (/^[a-zA-Z]\w{5,}$/.test(password)) {
//             alert("Password is valid.");
//             break;
//         } else {
//             alert("Invalid password. Please make sure your password meets the following requirements:\n1. It should contain alphabets and numbers\n2. It should not start with a number\n3. It must be at least 6 characters long");
//         }
//     } while(true);
// }

// validatePassword();



                                //question 16
// var arr = 'University Of Karachi';
// for(i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>")
// }

                      // question 17

// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write(`user input:${userInput}<br>`)
// document.write("Last character of the input: " + lastCharacter);

                          // question 18

// var text = "The quick brown fox jumps over the lazy dog";
// var words = text.split(" ");
// var count = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the" || words[i] === "The") {
//         count++;
//     }
// }
// document.write(`There are ${count} occurrence(s) of the word 'the'.`);


                      // CHAPTER 26 TO 30

                          // question 1

// var num = 3.45214;
// document.write(`<br>number: ${num}`);
// document.write(`<br>Round of value: ${Math.round(num)}`);
// document.write(`<br>Floor value: ${Math.floor(num)}`);
// document.write(`<br>Ceil value: ${Math.ceil(num)}`);


                     // question 2

// var num = -2.673;
// document.write(`<br>number: ${num}`);
// document.write(`<br>Round of value: ${Math.round(num)}`);
// document.write(`<br>Floor value: ${Math.floor(num)}`);
// document.write(`<br>Ceil value: ${Math.ceil(num)}`);

                     // question 3

// var num1 = -4;
// var num2 = 5;
// document.write(`<br>The absolute value of ${num1} is ${Math.abs(num1)}`);
// document.write(`<br>The absolute value of ${num2} is ${Math.abs(num2)}`);


//                      // question 4
// var randomNum = Math.random()*6;
// document.write(`Random dice value: ${randomNum.toFixed(0)}`);


                    //  question 5

// var heads = prompt('Enter player one name')
// var tails = prompt('Enter player two name')
// var toss = Math.random()*2;
// var convert = Math.floor(toss)
// if(convert == 0){
//     alert(heads + ' heads wins')
// }else{
//     alert(tails + ' tails wins')
// }


                   //question 6


// var randomNum = Math.random()*100;
// document.write(`Random number between 1 and 100: ${randomNum.toFixed(0)}`);


                  // question 7

// var weight1 = 50;
// var weight2 = '50kgs';
// var weight3 = '50.2kgs';
// var weight4 = '50.2kilograms';
// var userInputOfWeight = prompt('Enter your weight');
// if(userInputOfWeight == weight1 || userInputOfWeight == weight2 || userInputOfWeight == weight3 || userInputOfWeight == weight4){
//     document.write(`The weight of user is ${userInputOfWeight}`)
// }

                      // question 8

// var randomNumber = Math.random()*10;
// var secretNumber = randomNumber.toFixed(0)
// var userInput = prompt('Enter a secret number between 1-10');
// if(userInput == secretNumber){
//     alert('Congratulations you win')
// }else{
//     alert('You loss')
// }


