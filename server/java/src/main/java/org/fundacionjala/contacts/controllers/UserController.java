package org.fundacionjala.contacts.controllers;

import org.fundacionjala.contacts.models.User;
import org.fundacionjala.contacts.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.Optional;

@Controller


public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){this.userService = userService;};


    @RequestMapping("/register")
    public String showRegistrationForm(Model model){
        model.addAttribute("user",new User());
        return "signup_form";
    }
    @RequestMapping("/process_register")
    public String processRegister(User user, HttpServletRequest request) throws UnsupportedEncodingException, MessagingException {
       userService.register(user,getSiteURL(request));
        return "register_success";

    }
    private String getSiteURL(HttpServletRequest request) {
        String siteURL = request.getRequestURL().toString();
        return siteURL.replace(request.getServletPath(), "");
    }
    @RequestMapping("/index")
    public String viewHomePage(Model model) {
        model.addAttribute("message","hi i am a atribute on model");
        return "index2";
    }
    @RequestMapping("/verify")
    public String verifyNewAccount(@RequestParam String code){
       Optional<User> optionalUser = userService.getUserByVerificationCode(code);
       if(optionalUser.isPresent()){
           User existingUser = optionalUser.get();
           existingUser.setEnabled(true);
           existingUser.setVerificationCode(null);
           userService.modifyUser(existingUser);
           return "Usuario_validado";
           } else return "Intente_de_nuevo";
    }
}
