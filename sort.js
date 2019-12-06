const REQUEST = ["bike", "driving license"]

const COMPANYS = [
{name:"A", requires:[ ["apartment","house"],"property insurance"]},
{name:"B", requires:[["5 door car","4 door car"],"driver's license"]},
{name:"C", requires:["social security number","work permit"]},
{name:"D", requires:["house"]},
{name:"E", requires:["driver's license",["2 door car","3 door car","4 door car","5 door car"]]},
{name:"F", requires:["scooter or bike or motorcycle","driver's license", "motorcycle insurance"]},
{name:"G", requires:["apartment or house", "driver's license","property insurance"]},
{name:"H", requires:["apartment or house","property insurance"]},
{name:"J", requires:[]},
{name:"K", requires:["apartment or house","property insurance","bike"]},
{name:"l", requires:["bike", "driving license"]},
{name:"M", requires:[["apartment","house", "bike"], "driving license"]},
{name:"0", requires:["bike"]}
]
const TEST_ARR_SIZE = 10000;
const _COMPANYS = ()=>{ // function for criating big arr for test 
	let arr = []
	for(let i = 0; i < TEST_ARR_SIZE; i++){
		arr =[...arr, ...COMPANYS]
	}
	return arr.sort((a,b)=>a.requires.length - b.requires.length) // sort arr, for less iteration 
}

// const sort_COMPANYS = COMPANYS.sort((a,b)=>a.requires.length - b.requires.length) 


const RESULT = (arr, req)=>{	// get new arr with companys whear can work
		
		const _result = []
		for(let i = 0; arr[i].requires.length <= req.length; i++ ) {
			
				if(!arr[i].requires.length){ 		//check, company have requiers or not
			_result.push(arr[i])
		}else if(compareFn(arr[i], req)){
			_result.push(arr[i])
		}
		}			
	
	return _result
}

const compareFn = (el, req)=>{ // function, for finding coincidence
	const {requires} = el;	
	const isHasOneOf = (el) => Array.isArray(el) // Func chack if requires Att has Arr with "or" inside
		if(!requires.some(isHasOneOf)){
			let intersection = requires.filter(it => req.includes(it)) // Intersection of arrays
			if (intersection.length === requires.length ){
				return true
			}
		}else{
				let _check = []; // arr with resalts of compares - true or false
				for(let i of requires){								
					if(Array.isArray(i) ){		// if item is arr (requires one of), check coincidence			
					const compar = i.filter(it => req.includes(it)).length > 0
						_check.push(compar)
					}
					 else {
					 	const temp = req.indexOf(i) >-1; 
					 	_check.push(temp) 
				}
					 }					 
				return !_check.includes(false); // if all resalts(all items of arr) is true, return true, else return false
		}	
} 
console.log( RESULT(_COMPANYS(), REQUEST))
// if you don't want use test function for creating big arr, use arr sort_COMPANYS, but recommit it first