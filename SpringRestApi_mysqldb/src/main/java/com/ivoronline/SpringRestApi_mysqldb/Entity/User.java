package com.ivoronline.SpringRestApi_mysqldb.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private String firstName;
    private String lastName;
    private String emailId;

    public User(){}
    public User(String firstName , String lastName,String emailId){
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId= emailId;
    }
    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id=id;
    }
    public String getFirstName(){
        return firstName;
    }
    public void setFirstName(String firstName){
        this.firstName= firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public  void setLastName(String lastName){
        this.lastName=lastName;
    }
    public String getEmailId(){
        return  emailId;
    }
    public void setEmailId(String emailId){
        this.emailId = emailId;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", emailId='" + emailId + '\'' +
                '}';
    }
}
