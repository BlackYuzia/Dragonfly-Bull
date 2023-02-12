import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('audio') private audio: Queue) {
    this.addBulk();
    this.addOne();
  }

  async addBulk() {
    try {
      await this.audio.addBulk([
        {
          data: {
            date: new Date()
          }
        },
        {
          data: {
            date: new Date()
          }
        },
        {
          data: {
            date: new Date()
          }
        },
        {
          data: {
            date: new Date()
          }
        },
        {
          data: {
            date: new Date()
          }
        },
      ])
    } catch (error) {
      console.error("Error on addOne", error)
    }
  }

  async addOne() {
    try {
      await this.audio.add({
        date: new Date()
      })
    } catch (error) {
      console.error("Error on addOne", error)
    }
  }
}
