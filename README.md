# Mongo-Hamburgers


Get Started
start mongo server

in terminal type brew services start mongodb-community@6.0
Note - to stop : brew services stop mongodb-community@6.0
start a mongo shell

when mongo is running, open a new tab in terminal and type
mongosh
your prompt should now be a >
Note - to stop : type exit
show dbs to show your databases

db show which database is in use (default is usually test)

use burgers to switch to a database named burgers, if there is no database burgers it will create and switch into it

expected output
switched to db burgers
db.createCollection('burger') to create a burger collection

Expected output:
{
  "ok": 1
}
show collections - to show collections

Expected output
burgers → 0.000MB / 0.004MB
Let's make a burger document together

db.burger.insert(
  {
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles']
  }
  )
Expected output:
 WriteResult({
 "nInserted": 1
})
Let's query for all the burgers, since we just made one burger, it should just show one burger
db.burger.find()
Expected output:
{
  "_id": ObjectId("5a18c6e82737dc8b317a46dc"),
  "meat": "beef",
  "cheese": false,
  "toppings": [
    "ketchup",
    "onions",
    "pickles"
  ]
}
Fetched 1 record(s) in 2ms
let's make one more burger exactly like the one we just made (copy paste again)
Follow the rest of the prompts in answers.js