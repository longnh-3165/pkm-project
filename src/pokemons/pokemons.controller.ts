import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  async get() {
    return await this.pokemonService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.pokemonService.getById(id);
  }
}
