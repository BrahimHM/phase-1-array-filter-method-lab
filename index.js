// Code your solution here
const findMatching = (drivers,match)=>{
    return drivers.filter((element)=>element.toUpperCase()===match.toUpperCase())
}

const fuzzyMatch = (drivers,match)=>{
  return drivers.filter((element)=> element.slice(0,match.length)===match)
}

const matchName=(drivers,match)=>{
    return drivers.filter((element)=>element.name===match)
}