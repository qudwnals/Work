import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BasicModule } from './basic/basic.module';
import { SecondModule} from "./second/second.module";
import {ValidationPipe} from "@nestjs/common";


async function bootstrap() {
  const basic = await NestFactory.create(BasicModule);
  basic.useGlobalPipes(new ValidationPipe());
  await basic.listen(3000);


}
bootstrap();
