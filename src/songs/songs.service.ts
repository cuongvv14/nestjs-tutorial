import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the db
    // errors comes while fetching the data
    throw new Error('Error');
    return this.songs;
  }
}
