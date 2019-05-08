import mongoose, {Schema} from 'mongoose';

const EquipmentBorrowed = new Schema({
  equipmentId: {
    type: String,
    required: true,
  },
  catalogId: {
    type: String,
    required: true,
  },
  signoutDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
});

const Signout = new Schema({
  email: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  equipmentList: [EquipmentBorrowed],
  signaturePath: {
    type: String,
    required: true,
  },
});


export default mongoose.model('Signout', Signout);
