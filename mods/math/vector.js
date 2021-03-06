/* @wolfram77 */
/* VECTOR - vector related operations */

(function(g) {

	var $ = {};

	// define from point p to q
	$.define = function(p, q) {
		return this.sub(q, p);
	};

	// to polar form
	$.toPolar = function(a) {
		return [this.length(a), this.angle(a)];
	};

	// to cartesian form
	$.toCartesian = function(a) {
		return [a[0]*Math.cos(a[1]), a[0]*Math.sin(a[1])];
	};

	// length
	$.length = function(a) {
		return Math.sqrt(a[0]*a[0]+a[1]*a[1]);
	};

	// angle
	$.angle = function(a) {
		return Math.atan2(a[1], a[0]);
	};

	// slope
	$.slope = function(a) {
		return a[1]/a[0];
	};

	// unit (vector)
	$.unit = function(a) {
		var l = this.length(a);
		return [a[0]/l, a[1]/l];
	};

	// addition
	$.add = function(a, b) {
		return [a[0]+b[0], a[1]+b[1]];
	};

	// subtraction
	$.sub = function(a, b) {
		return [a[0]-b[0], a[1]-b[1]];
	};

	// dot product
	$.dot = function(a, b) {
		return a[0]*b[0]+a[1]*b[1];
	};

	// cross product
	$.cross = function(a, b) {
		return a[0]*b[1]-a[1]*b[0];
	};

	// rotate
	$.rotate = function(a, t) {
		return [a[0]*Math.cos(t)-a[1]*Math.sin(t), a[0]*Math.sin(t)+a[1]*Math.cos(t)]
	};

	// scale
	$.scale = function(a, f) {
		return [f*a[0], f*a[1]];
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	(g.math=g.math||{}).vector = $;
	console.log('math.vector> ready!');
})($$);
