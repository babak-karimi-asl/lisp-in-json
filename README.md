# lisp-in-json
currently does not support function arguments and so many other things :)

## how to use

```javascript
import {LispInJson} from './lisp-in-json.js'

const lij = LispInJson()

lij.run([
    ['print',['*',5,6]], //30
    ['print',['/',12,6]], // 2
    ['print',['+',8,2]], // 10
    ['print',['-',1,10]], // -9
    ['print',['+',['-',['*',3,['/',20,4]],3],5]], // 17
])
```

## other examples

create and access object fields

```javascript
  lij.run([  
    ['$set','myObj',{a:{b:{c:'hello'}}}],
    ['print',['.',['$get','myObj'],'a','b','c'] ], // hello
  ])
```

creating and calling functions . (function arguments currently not supported)

```javascript
   lij.run([
     ['$set','myNamespace/myFunction',['#','print','foo','bar','baz',['+',3,10]] ] ,
     ['call',['$get','myNamespace/myFunction']] , // foo bar baz 13
   ])
```

more examples in index.js file . 
    

