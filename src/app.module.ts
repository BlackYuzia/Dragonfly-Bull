import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost', // ! replace by your host
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'audio',
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
