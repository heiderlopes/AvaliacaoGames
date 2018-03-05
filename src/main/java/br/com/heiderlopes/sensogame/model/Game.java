package br.com.heiderlopes.sensogame.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Game {

    @Id
    private String id;
    private String nome;
    private Integer pontuacaoUsabilidade;
    private Integer pontuacaoGrafico;
    private Integer pontuacaoRoteiro;
    private Integer pontuacaoGeral;
    private boolean avaliado;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getPontuacaoUsabilidade() {
        return pontuacaoUsabilidade;
    }

    public void setPontuacaoUsabilidade(Integer pontuacaoUsabilidade) {
        this.pontuacaoUsabilidade = pontuacaoUsabilidade;
    }

    public Integer getPontuacaoGrafico() {
        return pontuacaoGrafico;
    }

    public void setPontuacaoGrafico(Integer pontuacaoGrafico) {
        this.pontuacaoGrafico = pontuacaoGrafico;
    }

    public Integer getPontuacaoRoteiro() {
        return pontuacaoRoteiro;
    }

    public void setPontuacaoRoteiro(Integer pontuacaoRoteiro) {
        this.pontuacaoRoteiro = pontuacaoRoteiro;
    }

    public Integer getPontuacaoGeral() {
        return pontuacaoGeral;
    }

    public void setPontuacaoGeral(Integer pontuacaoGeral) {
        this.pontuacaoGeral = pontuacaoGeral;
    }

    public boolean isAvaliado() {
        return avaliado;
    }

    public void setAvaliado(boolean avaliado) {
        this.avaliado = avaliado;
    }
}
