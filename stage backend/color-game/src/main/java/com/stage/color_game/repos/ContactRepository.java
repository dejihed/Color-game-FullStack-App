package com.stage.color_game.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.color_game.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
