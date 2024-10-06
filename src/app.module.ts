import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './basic/basic.module';
import { SecondModule } from './second/second.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BasicModule, SecondModule],
})
export class AppModule {}
