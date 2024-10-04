import { Injectable } from '@nestjs/common';
import {secondDto} from "../SecondDto";
import {secondRespondto} from "../SecondResponDto";
import {resultDto} from "../dto/res/ResultDto";
import {dateDto} from "../dto/req/DateDto";

@Injectable()
export class SecondService {

    create(query :dateDto ) {
        query.id = "민병주";
        query.phone = "01039312432"
         query.contry = "부산"


        return query
    }
}
