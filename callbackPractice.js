/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  function first(names, callback){
    callback(names[0])
  }


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//names is an arraay of names in the form a strings.
first(names, function(firstName){ // <-- the function first is being invoked.
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  function last(names, callback) {
    callback(names[names.length - 1])
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  function multiply(num, num2, callback) {
      var result = (num * num2);
      callback(result);
  }

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function contains(names, str, callback){
    for(var i = 0; i < names.length; i++){
      if(names.indexOf(str) === -1){
        return callback(false);
      }
        else {
        return callback(true);
        }
      }
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

// function uniq(array, callback){
// 	var newArray = [];
// 	for(var i = array.length - 1; i < -1; i--){
// 		newArray.push([i]);
//
// 		for(var j = newArray.length -1; i < -1; i--){
// 			if(array[i] === newArray[j - 1] ||array[i] === newArray[j + 1]){
// 			  newArray.splice(i, 1)
// 			  }
// 		}
// 	}
// 	callback(newArray);
// }


  // function uniq(array, callback){
  //   var uniqArr = [];
  //   for (var i = array.length -1; i >= 0; i--) {
  //     if (array.indexOf(array[i] === -1)) {
  //       uniqArr.push(i);
  //       console.log(uniqArr);
  //     }
  //   }
  //     callback(uniqArr);
  // }


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

//
//
//
//
// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
function each(array, callback) {
      for (var i = 0; i < array.length; i++) {
        if(array.indexOf(item, i) !== -1){
          return callback(item, i)
        }
      }
}
//
//
// each(names, function(item, indice){
//   console.log('The item in the ' + indice + ' position is ' + item)  //<- this wants the index or indice of the item.
// });
//
//
//
//
//
// /* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
//
//
//
//
      function getUserById(array, str, callback){
        for (var i = 0; i < array.length; i++) {
          if(array[i].id === str){
            callback(array[i]);
          }
        }
      }
//
// var users = [
//   {
//     id: '12d',
//     email: 'tyler@gmail.com',
//     name: 'Tyler',
//     address: '167 East 500 North'
//   },
//   {
//     id: '15a',
//     email: 'cahlan@gmail.com',
//     name: 'Cahlan',
//     address: '135 East 320 North'
//   },
//   {
//     id: '16t',
//     email: 'ryan@gmail.com',
//     name: 'Ryan',
//     address: '192 East 32 North'
//   },
// ];
//
// getUserById(users, '16t', function(user){
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
// });
