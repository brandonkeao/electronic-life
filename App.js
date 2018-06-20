var Vector = require("./Vector");
var Grid = require("./Grid");
var BouncingCritter = require("./BouncingCritter");
var World = require("./World");
var Wall = require("./Wall");

var plan =
  ["############################",
   "#      #    #      o      ##",
   "#                          #",
   "#          #####           #",
   "##         #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##       o             #",
   "# o  #        o        ### #",
   "#    #                     #",
   "############################"];

var world = new World(plan,
                      {
                        "#": Wall,
                        "o": BouncingCritter
                      });

console.log(world.toString());
//console.log(plan.toString());
/* TESTS */

/* WORLD */

/* GRID */
// var grid = new Grid(5,5);
// console.log(grid.get(new Vector(1, 1)));
//
// grid.set(new Vector(1,1), "X");
// console.log(grid.get(new Vector(1,1)));

/* CRITTER */
// var bouncing_critter = new BouncingCritter();
// console.log(bouncing_critter.getDirectionNames());
// console.log(bouncing_critter.getDirection());
