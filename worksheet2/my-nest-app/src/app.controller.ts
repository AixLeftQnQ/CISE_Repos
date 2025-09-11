import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';
import { Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello CISE!';
  }

  @Get('/api/articles')
  getArticles(): any[]{
    return ARTICLES;
  }

  @Get('api/articles/:id')
  getArticlesById(@Param('id')id: string){
    console.log('Requested Article ID:', id);
    return ARTICLES.find(article => article._id === id);
  }

}
