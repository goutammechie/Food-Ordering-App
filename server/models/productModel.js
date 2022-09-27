const mongoose =require('mongoose')
const Schema =mongoose.Schema

const categorySchema= new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

const productSchemna= new Schema(
    {
        name:{ type: String, require: true},
        adjective: { type:String, require: true },
        description: { type: String, require:true},
        price : { type: String, require:true},
        category : { type: String, require:true},
    }
)

module.exports =mongoose.model('Product', productSchemna );

// sql fixed data type
// nosql can store different combinations data type in same entry or object