package com.ivoronline.SpringRestApi_mysqldb.Controller;

import com.ivoronline.SpringRestApi_mysqldb.Entity.User;
import com.ivoronline.SpringRestApi_mysqldb.Exception.ResourceNotFoundException;
import com.ivoronline.SpringRestApi_mysqldb.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge=4800)
@RestController
@RequestMapping("api/v1")
public class UserController {
    @Autowired private UserRepository userRepository;

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }
    @GetMapping("/users")
    public List<User>getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/users/{id}")
    public ResponseEntity<User>getUserById(@PathVariable Integer id){
        User user = userRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("User not exist id:"+id));
        return ResponseEntity.ok(user);
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<User>updateUser(@PathVariable Integer id,@RequestBody User userDetail){
        User user = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
        user.setFirstName(userDetail.getFirstName());
        user.setLastName(userDetail.getLastName());
        user.setEmailId(userDetail.getEmailId());
        User updateUser = userRepository.save(user);
        return ResponseEntity.ok(updateUser);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String,Boolean>>deleteUser(@PathVariable Integer id){
        User user = userRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
        userRepository.delete(user);
        Map<String,Boolean>response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
