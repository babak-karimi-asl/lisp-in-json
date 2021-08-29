
import {LispInJson} from './lisp-in-json.js'

const lij = LispInJson()

lij.run([

    ['print',['*',5,6]], //30
    ['print',['/',12,6]], // 2
    ['print',['+',8,2]], // 10
    ['print',['-',1,10]], // -9
    ['print',['+',['-',['*',3,['/',20,4]],3],5]], // 17


    // other examples vvv

    // access object fields
    /*
    ['$set','myObj',{a:{b:{c:'hello'}}}],
    ['print',['.',['$get','myObj'],'a','b','c'] ],
    */


    // working with arrays
    /*
    ['$set','myArray', ['array',4,3,'babak'] ],
  	['$set','first', ['head',['$get','myArray'] ] ],
  	['$set','rest', ['tail' ,['$get','myArray'] ] ],
  	['print','first = ',['$get','first'] ],
    ['print','rest = ',['$get','rest'] ],
    */


    // creating and calling functions
    /*
     ['$set','myNamespace/myFunction',['#','print','foo','bar','baz',['+',3,10]] ] ,
     ['call',['$get','myNamespace/myFunction']] ,
    */


    // working with dom
    /*
    ['$set','canvas/click/callback', ['#','js/console.log','canvas clicked!'] ],
    ['$set','canvas',['dom/createElement','canvas'] ],
    ['dom/setAttribute', ['$get','canvas'],'width','600' ],
    ['dom/setAttribute', ['$get','canvas'],'height','400' ],
    ['dom/setAttribute', ['$get','canvas'],'style','border:1px solid gray;' ],
    ['dom/appendChild', ['dom/getBody'],['$get','canvas'] ],
    ['dom/addEventListener',['$get','canvas'],'click', ['$get','canvas/click/callback']  ],
    */

])
