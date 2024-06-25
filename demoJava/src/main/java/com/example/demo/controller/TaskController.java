package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/create")
    public String createTask(@RequestBody Task task) {
        taskService.createTask(task);
        return "Task created";
    }

    @GetMapping("/getTasks")
    public List<Task> getTasks() {
        return taskService.getAllTasks();
    }

    @DeleteMapping("/remove")
    public String deleteTask(@RequestBody Task task) {
        return taskService.deleteTask(task.getId());
    }
}
