package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;
@Repository
public interface UserRepositoryImpl extends JpaRepository<User, Integer> {
    User getUserByUsername(String username);
    Optional<User>getUserByVerificationCode(String verificationCode);


}
