import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import next from 'next';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [RenderModule.forRootAsync(next({ dev: true }), { viewsDir: null })],
  providers: [AppService],
})
export class AppModule {}
