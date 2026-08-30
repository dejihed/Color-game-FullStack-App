package com.stage.color_game.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class GameHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private LocalDateTime lastPlayed;
    private String result; 

    public GameHistory() {}

    public GameHistory(User user, LocalDateTime lastPlayed, String result) {
        this.user = user;
        this.lastPlayed = lastPlayed;
        this.result = result;
    }

    public Long getId() { return id; }
    public User getUser() { return user; }
    public LocalDateTime getLastPlayed() { return lastPlayed; }
    public String getResult() { return result; }

    public void setUser(User user) { this.user = user; }
    public void setLastPlayed(LocalDateTime lastPlayed) { this.lastPlayed = lastPlayed; }
    public void setResult(String result) { this.result = result; }
}
