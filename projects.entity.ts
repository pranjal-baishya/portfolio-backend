// src/graphql/projects/project.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  techStack: string[];

  @Prop()
  link: string;

  @Prop()
  imageUrl: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
