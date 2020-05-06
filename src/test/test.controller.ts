import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('test')
export class TestController {

    constructor(private appService: AppService) {

    }

    @Get('hello-world')
    index() {
        return this.appService.getHello() + ' from TEST';
    }
}
