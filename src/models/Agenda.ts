import {Schema, model, Types} from "mongoose"

interface IAgenda {
  profissionalServico: Types.ObjectId;
  cliente: Types.ObjectId;
  data: Date;
}

const agendaSchema = new Schema<IAgenda>({
  
})