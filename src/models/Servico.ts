import { model, Schema } from "mongoose";

interface IServico {
  servico: string;
  preco: string;
  duracao: String;
  descricao: string;
}

const servicoSchema = new Schema<IServico>(
  {
    servico: {type: String, required: true},
    preco: {type: String, required: true},
    duracao: {type: String, required: true},
    descricao: {type: String, required: true},
  },{
    timestamps: true,
    collection: "Servico",

  }
);

const Servico = model<IServico>("Servico", servicoSchema)
 export {Servico, IServico};