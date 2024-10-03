import { Injectable } from '@nestjs/common';
import {DateDto} from "../DateDto";
import {resultDto} from "../ResultDto";

@Injectable()
export class BasicService {
  create(body : DateDto){
    const ResultDto = new resultDto();

    ResultDto.id = "쿠널즈"
    ResultDto.pw = "2432";

    return ResultDto;


  }
}
