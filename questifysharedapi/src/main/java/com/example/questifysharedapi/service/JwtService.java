package com.example.questifysharedapi.service;


import com.example.questifysharedapi.config.filter.SecretKeyGenerator;
import com.example.questifysharedapi.exception.InvalidTokenException;
import com.example.questifysharedapi.model.AccessToken;
import com.example.questifysharedapi.model.User;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final SecretKeyGenerator keyGenerator;

    public AccessToken generateToken(User user){

        var key = keyGenerator.getKey();
        var expirationDate = generationExpirateDate();
        var claims = generateTokenClaims(user);

        String token = Jwts
                .builder()
                .id(user.getId().toString())
                .signWith(key)
                .subject(user.getEmail()) // identification que identify who is the user
                .expiration(expirationDate)
                .claims(claims) // informations that I want to send to frontend
                .compact();


        return new AccessToken(token);
    }

    private Date generationExpirateDate(){
        var minutesToExpiration = 60;
        LocalDateTime now = LocalDateTime.now().plusMinutes(minutesToExpiration);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
    }

    private Map<String , Object> generateTokenClaims(User user){
        Map<String,Object> claims = new HashMap<>();
        claims.put("name" , user.getName());
        claims.put("id", user.getId());
        return claims;
    }

    public Long getIdFromToken(String tokenJwt){
        try {
            JwtParser build = Jwts.parser()
                    .verifyWith(keyGenerator.getKey())
                    .build();
            Jws<Claims> jwsClaims = build.parseSignedClaims(tokenJwt);

            Claims claims = jwsClaims.getPayload();
            return Long.parseLong(claims.getId());
        }catch (JwtException e){
            throw new InvalidTokenException(e.getMessage());
        }
    }

    public String getEmailFromToken(String tokenJwt){

        try {
            JwtParser build = Jwts.parser()
                    .verifyWith(keyGenerator.getKey())
                    .build();
            Jws<Claims> jwsClaims = build.parseSignedClaims(tokenJwt);

            Claims claims = jwsClaims.getPayload();
            return claims.getSubject();
        }catch (JwtException e){
            throw new InvalidTokenException(e.getMessage());
        }
    }
}
