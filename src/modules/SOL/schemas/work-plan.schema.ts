import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Items } from "./items.schema";

@Schema({ timestamps: true, collection: WorkPlan.name.toLowerCase() })
export class WorkPlan {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({
    required: true,
    type: [
      {
        quantity: { type: Number, required: true },
        unitValue: { type: Number, required: true },
        unit: { type: String },
        costItems: { type: mongoose.Schema.Types.ObjectId, ref: Items.name, required: true },
      },
    ],
  })
  product: Array<{ quantity: number; unit: string; unitValue: number; costItems: Items }>;

}
export const WorkPlanSchema = SchemaFactory.createForClass(WorkPlan);
