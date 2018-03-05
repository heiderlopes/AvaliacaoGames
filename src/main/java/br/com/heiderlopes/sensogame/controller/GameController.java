package br.com.heiderlopes.sensogame.controller;

import br.com.heiderlopes.sensogame.model.Game;
import br.com.heiderlopes.sensogame.model.Health;
import br.com.heiderlopes.sensogame.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/game")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/ranking")
    public List<Game> findAll() {
        return gameService.findAllOrderByPontuacaoGeralDesc();
    }

    @GetMapping()
    public List<Game> find(@RequestParam(value = "nome", required = false) String nome) {
        return gameService.findGame(nome);
    }

    @PostMapping("/votar")
    public Game votar(@RequestBody Game game) {
        return gameService.votar(game);
    }

    @PostMapping
    public void salvar(@RequestBody Game game) {
        gameService.salvar(game);
    }

    @DeleteMapping
    public void apagarTodos() {
        gameService.apagarTodos();
    }

    @DeleteMapping(value = "{id}")
    public void apagarTodos(@PathVariable("id") String id) {
        gameService.apagar(id);
    }

    @GetMapping(value = "healthcheck")
    public Health healthcheck() {
        return new Health("OK");
    }
}
