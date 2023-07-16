# mongoDb is NoSQL dataBases;

## COMMANDS:

to show Db use - show dbs

to create new database -: use youtube (then we need some collection in database)

db.createCollection('videos')

### To delete collection from our DataBase:

db.videos.drop()

## MONGODB CRUD OPERATIONS

## Insert

#### current database and then collection name and use insertOne method.

db.products.insertOne({name:'Sumsung-foldable',brand:'sumsung',price:12000,category:'mobile'
                      })

## Update

db.products.updateOne({name:"Iphone-6s"},{$set:{brand:"oppo"}})


## Delete

db.products.deleteOne({name:'Phone-6s'})

