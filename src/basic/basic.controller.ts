import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import { BasicService } from './basic.service';
import {dateDto} from "../dto/req/DateDto";
import {resultDto} from "../dto/res/ResultDto";

@Controller('basic')
export class BasicController {
  private readonly basicService: BasicService;

  constructor(basicService: BasicService) {
    this.basicService = basicService;
  }

  @Post('create')
  create(@Body() body:dateDto):resultDto{
    return this.basicService.create(body);
  }

  //@Param('id', ParseIntPipe) 문자열을 정수로 반환, 반환 하지 않으면 오류가 나옴
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id : number):resultDto {
    return this.basicService.getById(id);
  }
  @Post("all")
  getAll():resultDto[]{
    return  this.basicService.getAll();
  }
  @Get(':id/date')
  updateDate(@Param('id',ParseIntPipe)id : number): resultDto{
    return this.basicService.updateDate(id);
  }

}
