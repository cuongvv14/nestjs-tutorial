import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) { }
    
    @Post()
    create() {
        return this.songsService.create("123");
    }

    @Get()
    findAll() {
        return this.songsService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} song`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `This action updates a #${id} song`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} song`;
    }

}

