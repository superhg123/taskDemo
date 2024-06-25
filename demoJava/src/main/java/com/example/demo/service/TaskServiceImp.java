package com.example.demo.service;

import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Component
public class TaskServiceImp implements TaskService{
    @Autowired
    private TaskRepository taskRepository;
    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    @Override
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @Override
    public String deleteTask(int id) {
        taskRepository.deleteById(id);
        return "Task deleted";
    }
}
