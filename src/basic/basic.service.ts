import { Injectable } from '@nestjs/common';
import {DateDto} from "../DateDto";

@Injectable()
export class BasicService {
  create(body : DateDto){

    return "쿠널즈" ;
  }
}
