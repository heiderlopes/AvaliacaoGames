package br.com.heiderlopes.sensogame.model;

public class Health {

    public Health(String mensagem) {
        this.mensagem = mensagem;
    }

    private String mensagem;

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
