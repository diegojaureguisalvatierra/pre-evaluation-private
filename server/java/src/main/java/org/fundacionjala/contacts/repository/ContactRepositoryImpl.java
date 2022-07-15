package org.fundacionjala.contacts.repository;

import org.fundacionjala.contacts.models.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ContactRepositoryImpl extends JpaRepository<Contact, Integer> {
    List<Contact> getAllByNameOrderByName(String name);
    Optional<Contact> getContactByEmail(String email);
    @Query("select c from Contact c where c.email like ?1")
    Optional<Contact> getContactByEmailLike(String string);


}
