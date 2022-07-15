package org.fundacionjala.contacts.models;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;
import java.util.UUID;
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
    private String fullName;
    private String password;
    private String username;
    @Column(name = "verification_code", length = 64)
    private String verificationCode;
    private Boolean enabled;




    @Override
    public boolean equals(Object that) {
        if (this == that) return true;
        if (that == null || getClass() != that.getClass()) return false;
        User user = (User) that;
        return Objects.equals(id, user.id) &&
               Objects.equals(fullName, user.fullName) &&
               Objects.equals(username, user.username) &&
               Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fullName, password, username);
    }
}
