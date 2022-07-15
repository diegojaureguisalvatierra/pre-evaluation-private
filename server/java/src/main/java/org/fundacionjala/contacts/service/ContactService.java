package org.fundacionjala.contacts.service;

import org.fundacionjala.contacts.models.Contact;
import org.fundacionjala.contacts.repository.ContactRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    private final ContactRepositoryImpl contactRepository;

    @Autowired
    public ContactService(ContactRepositoryImpl contactRepository){
        this.contactRepository = contactRepository;
    }
    public List<Contact> getAllContactsSortedByName(String name){
        return contactRepository.getAllByNameOrderByName(name);
    }
    public Optional<Contact> getContactByEmailLike(String email){
        return contactRepository.getContactByEmailLike(email);
    }
    public void createContact(Contact contact){
        contactRepository.save(contact);
    }
    public void deleteContactById(Integer id){
        contactRepository.deleteById(id);
    }
}
