import {Body, Controller, Post} from '@nestjs/common';
import { BasicService } from './basic.service';
import {DateDto} from "../DateDto";

@Controller('basic')
export class BasicController {
  private readonly basicService: BasicService;

  constructor(basicService: BasicService) {
    this.basicService = basicService;
  }

  @Post()
  create(@Body() body:DateDto){
    return this.basicService.create(body);
  }
}
