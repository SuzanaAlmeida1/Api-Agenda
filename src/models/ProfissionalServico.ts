import { model, Schema, Types } from "mongoose";

interface IProfissionalServico {
  profissional: Types.ObjectId;
  servico: Types.ObjectId;  
}

const profissionalServicoSchema = new Schema<IProfissionalServico>(
  {
    profissional: {types:Schema.Types.ObjectId, required: true, ref:"Profissional",},
    servico: {types: Schema.Types.ObjectId, required: true, ref:"Servico"},
  },{
    timestamps: true,
    collection: "ProfissionalServico",
  }
);

const profissionalServico = model<IProfissionalServico>(
  "ProfissionalServico", profissionalServicoSchema
);


export {profissionalServico, IProfissionalServico}