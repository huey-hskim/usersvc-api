import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return Object.assign({
      message: 'Hello World!',
    });
  }
}
