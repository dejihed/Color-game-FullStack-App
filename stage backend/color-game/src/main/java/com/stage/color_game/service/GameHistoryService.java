package com.stage.color_game.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.stage.color_game.entities.GameHistory;
import com.stage.color_game.entities.User;
import com.stage.color_game.repos.GameHistoryRepository;

@Service
public class GameHistoryService {
    private final GameHistoryRepository historyRepository;

    public GameHistoryService(GameHistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    public void logGameResult(User user, String result) {
        GameHistory history = new GameHistory(user, LocalDateTime.now(), result);
        historyRepository.save(history);
    }

    public List<GameHistory> getUserHistory(Long userId) {
        return historyRepository.findByUserId(userId);
    }

    public List<GameHistory> getAllGameHistories() {
        return historyRepository.findAll();
    }
}
