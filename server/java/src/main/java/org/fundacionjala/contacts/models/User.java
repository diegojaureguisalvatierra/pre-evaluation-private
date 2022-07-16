package org.fundacionjala.contacts.models;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;
    private String name;
    private String lastName;
    private String password;
    @Column(unique = true)
    private String username;
    @Column(name = "verification_code", length = 64)
    private String verificationCode;
    private Boolean enabled;

    public User(String name, String lastName, String password, String username, String verificationCode, Boolean enabled) {
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.username = username;
        this.verificationCode = verificationCode;
        this.enabled = enabled;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) return true;
        if (that == null || getClass() != that.getClass()) return false;
        User user = (User) that;
        return Objects.equals(id, user.id) &&
               Objects.equals(name, user.name) &&
               Objects.equals(username, user.username) &&
               Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, password, username);
    }
}
