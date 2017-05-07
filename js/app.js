for (var i =0; i<= 100; i+=5) {
	console.log(i);
}


function getname(){
	var name=document.getelementbyid('input').value;
}

var house={
	make:'1990',
	color:'red'
};

console.log(house.color)

document.getElementById('house').innerHTML="<p>"+house.make+"</p>";

function myfunction(){
	var steal = document.getElementById('demo').innerHTML= "<h1>" + steal + "</h1>"
}
myfunction()

function getinfo() {
	var username = document.getElementById("username").value
	var password = document.getelementbyid("password").value

	console.log("you're username is" + username +"and your password is"+ password)
}

var house = ["1990","2000","2010"]
console.log("The first house is a"+ house[0]+", and the last house is a "+house[2])

var house = ["1990","2000","2010"]

for(i =0; i <house.lenght; i++) {
	console.log(house[i])
}

var houseobject ={
	make:"1990",
	color:"Red",
	Purchased: false
}

var pokemonArray = [
{
    name:"pikachu",
    power:"400",
    type:"electric"
},
{
	name:"Squirtle",
    power:"500",
    type:"water"

},
{
	name:"Bulbasaur",
    power:"400",
    type:"Vegetarian"
}


]

for(i=0; i <pokemonArray.lenght; i++){
	if (pokemonArray[i].power <=400){
		console.log(pokemonArray[i].name +" "+ pokemonArray[i].power)
	}
}
