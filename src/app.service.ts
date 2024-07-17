import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Boom!');
    return 'Hello World!';
  }
}
