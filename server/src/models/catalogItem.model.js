import mongoose, {Schema} from 'mongoose';

const ItemHistory = new Schema({
  signoutId: String,
  returnCondition: String,
});

const CatalogItem = new Schema({
  catalogId: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
  },
  circulationDate: {
    type: Date,
  },
  history: [ItemHistory],
  isAvailable: Boolean,
});


export default mongoose.model('CatalogItem', CatalogItem);
