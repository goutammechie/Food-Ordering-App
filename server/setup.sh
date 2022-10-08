mongosh food-ordering --eval "db.dropDatabase()"
mongoimport -d food-ordering -c categories --file db/categories.json
mongoimport -d food-ordering -c products --file db/products.json