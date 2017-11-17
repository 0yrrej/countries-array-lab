var countries = [ 
    "Chad", "Cuba", "Greenland", "Iraq", "Mali", "Oman", "India"
]
countries.push("Fiji")
countries.splice(4, 0, "Iran")
countries.pop()
countries.reverse()
countries.splice(2, 1, "Togo")

countries.reverse()
countries.unshift("Peru")
countries.pop()
countries.splice(4,1)
countries.push("Laos")

console.log (countries)




