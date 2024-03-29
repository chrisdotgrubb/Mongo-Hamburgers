// setup
use burgers
db.createCollection('burger')

// create 5 burgers (at least 3 should be beef)
db.burger.insertOne( { meat: 'beef', cheese: false, toppings: ['ketchup', 'onions', 'pickles'] });
db.burger.insertOne( { meat: 'beef', cheese: true, toppings: ['ketchup', 'onions', 'pickles', 'tomato'] });
db.burger.insertOne( { meat: 'beef', cheese: true, toppings: ['ketchup', 'extra cheese'] });
db.burger.insertOne( { meat: 'ham', cheese: true, toppings: ['ketchup', 'mustard', 'pickles'] });
db.burger.insertOne( { meat: 'ham', cheese: false});

// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find({}, {meat: 1, _id: 0})

// show just the toppings of each burger
db.burger.find({}, {toppings: 1, _id: 0})


// show everything but the cheese
db.burger.find({}, {cheese: 0})


// find all the burgers with beef
db.burger.find({meat: 'beef'})

// find all the burgers that are not beef
db.burger.find({meat: {$ne: 'beef'}})


// find the first burger with cheese
db.burger.findOne({cheese: true})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.findAndModify({query: {cheese: true}, update: {$set: {'double cheese': true}}})

// find the burger you updated to have double cheese
db.burger.find({'double cheese': true})

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany({meat: 'beef'}, {$set: {meat: 'veggie'}})

// delete one of your veggie burgers
// BEWARE: db.burger.remove({meat: 'veggie'}) DELETES ALL!!!  DO NOT USE!
db.burger.findOneAndDelete({meat: 'veggie'})

// drop the collection
//Expected Output
//true
db.burger.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

// access denied, update permissions
atlas > security > database access > edit the user > built-in role > atlas admin

// double check
use burgers

// drop
db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'
db.burger.updateMany({}, {$rename: {cheese: 'pumpkinSpice'}})

// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find({toppings: 'ketchup'})

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany({toppings: 'pickles'}, {$pull: {toppings: 'pickles'}})

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burger.updateMany({meat: 'beef'}, {$push: {toppings: 'eggs'}})

//Add a price to each burger, start with $5.00 for each burger 
db.burger.updateMany({}, {$set: {price: Decimal128('5.00')}})