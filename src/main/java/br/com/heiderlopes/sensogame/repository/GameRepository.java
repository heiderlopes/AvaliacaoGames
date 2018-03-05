package br.com.heiderlopes.sensogame.repository;

import br.com.heiderlopes.sensogame.model.Game;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends MongoRepository<Game, String> {
    List<Game> findAllByOrderByPontuacaoGeralDesc();
    List<Game> findByNomeIgnoreCaseContaining(String nome);
    List<Game> findByNomeIgnoreCase(String nome);
}
