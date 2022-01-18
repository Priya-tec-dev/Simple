module.exports = function simple(string) {
  if (typeof string !== "number") throw new TypeError("Simple wants a number!");
	var celsius =0
	var celsius = string;
	celsius *= 9/5;
	celsius += 32;
	var obs = (celsius).toFixed(1)
	var message = string+'\xB0F is ' + obs + '\xB0C.';
  return message;
};
