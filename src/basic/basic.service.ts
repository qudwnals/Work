import {Injectable, NotFoundException} from '@nestjs/common';
import {dateDto} from "../dto/req/DateDto";
import {resultDto} from "../dto/res/ResultDto";

@Injectable()
export class BasicService {
  private result : resultDto[]= [];
  private currentId =1;
  create(body : dateDto): resultDto{
    const Newpost : resultDto ={
      id:this.currentId++,  //새로은 게시글을 작성 할떄 마다 id 번호 증가
      title:body.title,
      content: body.content,
      createAt: new Date(),
    };
    this.result.push(Newpost);
    return Newpost;
  }

  getById(id:number): resultDto{
    const post = this.result.find(post => post.id ===id); //배열에 주어딘  아이디 번호 일치찾기
    if(!post){
      throw new NotFoundException(`ID가 ${id}인 게시글을 찾을 수 없습니다.`);
    }
    return  post;
  }

  getAll():resultDto[]{ //배열에 저장되어있는 모든 정보 출력
    return this.result
  }

  updateDate(id:number): resultDto{  //저장되어 있던 날짜 시간 정보를 최신화
    const post  =this.getById(id);
    post.createAt = new Date();
    return  post;
  }

}
