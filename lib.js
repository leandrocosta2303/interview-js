module.exports.spacify = function(str) {
  
  return str.split('').join(' ');

}

String.prototype.spacify = function( )
{
  return this.split('').join(' ');
};


module.exports.log = function( ) {

  var log = arguments[ arguments.length - 1 ];
 
  for (var i = 0; i < arguments.length - 2; i++) {
      console.log( log.log( arguments[i] ) );
  };

}

module.exports.User = {
  _count: 0,
  count: function(){
    return this._count;
  },
  new: function (attributes) {
    this._count++;
    return attributes;
  }

}

