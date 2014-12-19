module.exports.spacify = function(str) {
  
  return str.split('').join(' ');

}

String.prototype.spacify = function( )
{
  return this.split('').join(' ');
};


module.exports.log = function(  ) {

  var x = arguments[ arguments.length - 1 ];


  for (var i = 0; i < arguments.length; i++) {
    console.log(x.log(arguments[i] ) )
  };

  // window[args]


  // return obj.log( str );
  // args[ ].log = 1;



  // console.log( args['log'](str) );


  // console.log( args );
}

module.exports.User = {
  _count: 0,
  count: function(){
  },
  new: function (attributes) {
  }

}

