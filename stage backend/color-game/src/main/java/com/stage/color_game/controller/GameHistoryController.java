package com.stage.color_game.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stage.color_game.entities.GameHistory;
import com.stage.color_game.entities.User;
import com.stage.color_game.repos.UserRepository;
import com.stage.color_game.service.GameHistoryService;

@RestController
@RequestMapping("/api/game-history")
public class GameHistoryController {
    private final GameHistoryService historyService;
    private final UserRepository userRepository;

    public GameHistoryController(GameHistoryService historyService, UserRepository userRepository) {
        this.historyService = historyService;
        this.userRepository = userRepository;
    }

    @PostMapping("/log")
    public void logGame(@RequestParam Long userId, @RequestParam String result) {
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("User not found"));
        historyService.logGameResult(user, result);
    }

    @GetMapping("/{userId}")
    public List<GameHistory> getUserHistory(@PathVariable Long userId) {
        return historyService.getUserHistory(userId);
    }

    // New endpoint to get all game histories
    @GetMapping("/all")
    public List<GameHistory> getAllGameHistories() {
        return historyService.getAllGameHistories();
    }
}