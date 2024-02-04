package com.ivoronline.SpringRestApi_mysqldb.Repository;

import com.ivoronline.SpringRestApi_mysqldb.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
