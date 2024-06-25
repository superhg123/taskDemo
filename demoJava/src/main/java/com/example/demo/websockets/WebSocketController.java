package com.example.demo.websockets;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/chat1")
    @SendTo("/topic/canal1")
    public Information getMessage(Message message) {
        System.out.println("El mensaje recibido: " + message);
        return new Information(message.body());
    }
}
