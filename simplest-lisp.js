
const functionVars = {}
const functions = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b,
	mul: (a, b) => a * b,
	div: (a, b) => a / b,
	sum: (...a) => a.reduce((acc, cur) => acc + cur, 0),
	log: (...x) => console.log(...x),
	set: (name, value) => functionVars[name] = value,
	get: (name) => functionVars[name],
	run: (...x) => x,
}

const executeLispFunction = (args/*: string[]*/) => {
	if (!Array.isArray(args)) return args;
	const func = functions[args[0]]
	if (!func) return args;
	const fargs = args.slice(1);
	const result = func(...fargs.map(executeLispFunction))
	return result
}


// Example:
executeLispFunction(
	[
		'run',
		
		[ 'set','age1', 50 ],
		[ 'set','age2', 30 ],

		['log', 
			'sum of ages are:' , 
			['sum',
				['get','age1'], 
				['get','age2'],
			],
		]
	]
)
// Output: sum of ages are: 80
