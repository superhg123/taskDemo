package com.example.demo.service;

import com.example.demo.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
    public Task createTask(Task task);
    public List<Task> getAllTasks();
    public String deleteTask(int id);
}
