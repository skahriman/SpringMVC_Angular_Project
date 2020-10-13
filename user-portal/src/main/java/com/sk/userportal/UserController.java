package com.sk.userportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping()
    public List<User> getAll() {
        return repository.findAll();
    }

    @PostMapping()
    public User addUser(@RequestBody User user) {
        return repository.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        user.setId(id);
        return repository.save(user);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return repository.getOne(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        User user = repository.getOne(id);
        if (user != null) {
            repository.delete(user);
        }

    }
}
