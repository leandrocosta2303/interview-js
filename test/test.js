require('./spec_helper')

describe('lib.spacify', function(){
  it("returns the string spacified", function(){
    expect(lib.spacify("Hello!")).to.be.equal('H e l l o !')
  })
})

describe('String.spacify', function(){
  it('returns the string spacified', function(){
    expect('Hello!'.spacify()).to.be.equal('H e l l o !')
  })
})

describe('lib.log', function(){
  context('with one argument', function() {
    it('logs the arguments', function(){
      var console = {
        log: function(arg) {
          var args = Array.prototype.slice.call(arguments)
          expect(args.join('')).to.contain('Hello!')
        }
      }
      lib.log('Hello!', console) 
    })
  })

  context('with multiple arguments', function(){
    it('log all the arguments', function(){
      var expectedArguments = [1,2,3,4,5].map(function(n){
        return n * Math.random()
      })
      var console = {
        log: function() {
          var args = Array.prototype.slice.call(arguments)
          for(var i in expectedArguments) {
            expect(args).to.include(expectedArguments[i])
          }
        }
      }
      args = expectedArguments.slice()
      args.push(console)
      lib.log.apply(lib.log, args)
    })
  })

  it('prefixes all messages with "(app)"', function(){
    var console = {
      log: function() {
        var args = Array.prototype.slice.call(arguments)
        expect(args.join('')).to.contain('(app)')
      }
    }
    lib.log('Hello!', console)
  })
})

describe('lib.User', function(){
  beforeEach(function(){
    lib.User._count = 0
  })

  describe('_count', function(){
    it('always starts with 0', function(){
      expect(lib.User._count).to.be.equal(0) 
    })
  })

  describe('.count', function(){
    it('returns the user count', function(){
      lib.User.new()
      lib.User.new()
      expect(lib.User.count()).to.be.equal(2) 
    })
  })

  describe('.new', function(){
    it('initializes a new user', function(){
      var user = lib.User.new({name: 'Name'})
      expect(user.name).to.be.equal('Name')
    })
  })
})
