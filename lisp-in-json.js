

export function LispInJson(){
	const store = {}
	const functions = {
		'js/console.log':(...args)=>console.log(...args),
		'js/alert':(arg)=>alert(arg),
		'dom/createElement':(elementType)=>document.createElement(elementType),
		'dom/getElementById':(id)=>document.getElementById(id),
		'dom/getBody':()=>document.body,
		'dom/appendChild':(a,b)=>a.appendChild(b),
		'dom/setAttribute':(a,b,c)=>a.setAttribute(b,c),
		'dom/addEventListener':(a,b,c)=>a.addEventListener(b,c),

		'json/parse':(a)=>JSON.parse(a),

		'print':(...a)=>console.log(...a),
		'.':(a,...b)=>b.reduce((acc,cur)=>acc[cur],a),

		'+':(...args)=>args.reduce((acc,cur)=>acc+cur,0),
		'-':(...args)=>args.reduce((acc,cur)=>acc-cur),
		'*':(...args)=>args.reduce((acc,cur)=>acc*cur,1),
		'/':(...args)=>args.reduce((acc,cur)=>acc/cur),

		'identity':a=>a,
		'array':(...a)=>([...a]),

		'head':a=>a[0],
		'tail':a=>a.slice(1),
		'$set':(name,value)=>(store[name]=value,value),
		'$get':name=>store[name],
		'run':(...args)=>functions[args[0]](...args.slice(1)),
		'apply':(...args)=>args[0](...args.slice(1)),
		'call':(...args)=>args[0](...args.slice(1)),
	}

	const addFunction = (name,funktion)=>{
		if(functions[name]) console.log(`WARNING: overwriting function ${name}`)
		functions[name]=funktion
	}

	const run = (code)=>{
		if(Array.isArray(code) && (code[0]==='lambda' || code[0]==='#')) return ()=>run(code.slice(1))
		let result = code.map(c=>Array.isArray(c)?run(c):c)
		result = result.map(c=>Array.isArray(c)?run(c):c)
		result = result.map(c=>Array.isArray(c)?run(c):c)
		if(functions[result[0]])
			return functions[result[0]](...result.slice(1))
		else return result
	}

	return {
		store,
		functions,
		addFunction,
		run,
	}
}

export const createLispInJsonInterpreter = LispInJson
