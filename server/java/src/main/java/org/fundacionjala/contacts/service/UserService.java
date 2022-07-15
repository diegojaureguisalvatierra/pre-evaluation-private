package org.fundacionjala.contacts.service;

import org.fundacionjala.contacts.models.User;
import org.fundacionjala.contacts.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepositoryImpl userRepository;

    @Autowired
    public UserService(UserRepositoryImpl userRepository){
        this.userRepository = userRepository;
    }

    public User saveNewUser(User user){
        return userRepository.save(user);
    }
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    public Optional<User> getUserById(Integer id) {
        return userRepository.findById((id));
    }
    public void deleteUserById(Integer id){
        userRepository.deleteById(id);
    }
    public User modifyUser(User user) {
        return userRepository.save(user);
    }



}
