import mongoose from 'mongoose';

module.exports = () => {
  const bonsaiSchema = mongoose.Schema({
    common_name: {
      type: String,
      required: [true, 'Nome comum é obrigatório'],
    },
    scientific_name: {
      type: String,
      required: [true, 'Nome científico é obrigatório'],
    },
    origin: {
      type: String,
      required: [true, 'Origem é obrigatório'],
      validate: {
        validator(v) {
          return /semente|alporquia|estaquia|yamadori/i.test(v);
        },
        message: '{VALUE} não é um tipo válido de origem',
      },
    },
    origin_date: {
      type: Date,
      required: [true, 'Data de origem é obrigatório'],
    },
    planting_date: {
      type: Date,
      required: [true, 'Data do plantio é obrigatório'],
    },
  });

  return mongoose.model('Bonsai', bonsaiSchema);
};
