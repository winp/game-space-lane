/* @wolfram77 */
/* RIVER - defines a river (race track) */

(function(g) {

	var $ = function(v) {
		var o = this;
		o._super(v);
		o.clr = v.clr||'#CCE';
		o.pth = v.pth||[];
		o.thk = v.thk||400;
	};
	var p = $.prototype;
	var $o = $type.object;
	$o.merge(p, $graphics.item.prototype);

	// super class
	p._super = $graphics.item;

	// make path
	p.make = function(opt) {
		var o=this, $r=$math.random, $v=$math.vector;
		o.pth = [];
		var r=opt.r||500, dr=opt.dr||[-1,1];
		var a=opt.a||0, da=opt.da||[-1,1];
		var p=opt.p||[0,0], pd=null, rd=0, ad=0;
		for(var i=0, I=opt.size||100; i<I; i++) {
			o.pth.push(p);
			do {
				rd = Math.abs(r + $r.sympow(dr, 2));
				ad = a + $r.sympow(da, 2);
				pd = $v.add(p, $v.toCartesian([rd, ad]));
			} while(this._intersects(p, pd));
			r = rd; a = ad; p = pd;
		}
	};

	// draw river
	p.draw = function(c, r){
		var o=this;
		c.save();
		c.lineCap = 'round';
		c.lineJoin = 'round';
		c.lineWidth = o.thk;
		c.strokeStyle = o.clr;
		c.path(o.pth, '');
		c.stroke();
		c.restore();
	};

	// private: check if line a to b intersects with path
	p._intersects = function(a, b) {
		var $l = $math.line;
		for(var i=1, p=this.pth; i<p.length; i++)
			if($l.intersectRanged([p[i-1],p[i]], [a,b])) return [p[i-1], p[i]];
		return null;
	};

	// ready
	if(typeof module!=='undefined') module.exports = $;
	else (g.$item=g.$item||{}).river = $;
	console.log('item.river> ready!');
})(this);