import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody{
  @IsNotEmpty() // Não deixa enviar campo vazio
  @IsUUID() // Não deixa criar info com texto
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240) // defini nº min e máx de caracteres
  content: string;

  @IsNotEmpty()
  category: string;
}