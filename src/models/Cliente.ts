import {Schema, model} from "mongoose"

interface ICliente {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  aniversário?: string;
  sexo?: string;
}

const clienteSchema = new Schema<ICliente>({

  nome: {type: String, requires: true},
  email: {type: String, required: true },
  senha: {type: String, required: true},
  telefone: { type: String, required: true},
  aniversário: {type: String},
  sexo: {type: String},
},
{
  timestamps: true,
  collection: "Cliente,"
}
);

const Cliente = model<ICliente>("Cliente", clienteSchema);

export {Cliente, ICliente};