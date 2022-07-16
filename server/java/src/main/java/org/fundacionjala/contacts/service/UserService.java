package org.fundacionjala.contacts.service;

import net.bytebuddy.utility.RandomString;
import org.fundacionjala.contacts.models.User;
import org.fundacionjala.contacts.repository.UserRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepositoryImpl userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender mailSender;

    @Autowired
    public UserService(UserRepositoryImpl userRepository,PasswordEncoder passwordEncoder, JavaMailSender mailSender){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.mailSender = mailSender;
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
    public Optional<User> getUserByVerificationCode(String code){
        return userRepository.getUserByVerificationCode(code);
    }

    public void deleteUserById(Integer id){
        userRepository.deleteById(id);
    }
    public User modifyUser(User user) {
        return userRepository.save(user);
    }
    public void register( User user, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        String randomCode = RandomString.make(64);
        user.setVerificationCode(randomCode);
        user.setEnabled(false);
        userRepository.save(user);
        sendVerificationEmail(user,siteURL);
    }
    private void sendVerificationEmail(User user, String siteURL) throws MessagingException, UnsupportedEncodingException{
        String toAddress = user.getUsername();
        String fromAddress = "locario97@gmail.com";
        String senderName = "JalaBootCamp Inc";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "JalaBootCamps Inc.";
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.getName());
        String verifyURL = siteURL + "/verify?code=" + user.getVerificationCode();

        content = content.replace("[[URL]]", verifyURL);

        helper.setText(content, true);
        System.out.println("Mandando mensaje");

        mailSender.send(message);
    }



}
