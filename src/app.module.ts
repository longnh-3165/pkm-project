import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './modules/pokemons/pokemons.module';
import { PokemonsController } from './pokemons/pokemons.controller';
import { PokemonsService } from './pokemons/pokemons.service';

@Module({
  imports: [PokemonsModule],
  controllers: [AppController, PokemonsController],
  providers: [AppService, PokemonsService],
})
export class AppModule {}
