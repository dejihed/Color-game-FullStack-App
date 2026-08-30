package com.stage.color_game.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stage.color_game.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
