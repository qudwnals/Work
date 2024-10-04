import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {BasicService} from "../basic/basic.service";
import {secondDto} from "../SecondDto";
import {SecondService} from "./second.service";
import {secondRespondto} from "../SecondResponDto";
import {dateDto} from "../dto/req/DateDto";
import {resultDto} from "../dto/res/ResultDto";


@Controller('second')
export class SecondController {
    private readonly secondservice : SecondService;

    constructor(secondservice: SecondService) {
        this.secondservice = secondservice;
    }

    @Get()
    create(@Query() query : dateDto){
        return this.secondservice.create(query);
    }



}
