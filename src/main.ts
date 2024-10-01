import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BasicModule } from './basic/basic.module';

async function bootstrap() {
  const basic = await NestFactory.create(BasicModule);
  await basic.listen(3000);
}
bootstrap();
