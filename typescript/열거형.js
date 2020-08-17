var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var mycolor;
mycolor = Color.Red;
console.log(mycolor);
console.log(Color.Green);
console.log(Color.Blue);
