package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	
	@GetMapping("/home")
	
	public String home() {
		
		return "Welcome to courses application";
	}
	
	//get the courses
	@GetMapping("/courses")
	@CrossOrigin(origins = "*")
	public List<Course> getCourses(){
		
		return this.courseService.getCourses();
		
	}
	
	
	@GetMapping("/courses/{courseId}")
	@CrossOrigin(origins = "*")
	public Course getCourse(@PathVariable String courseId) {
		
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//@PostMapping(path="/courses", consumes="application/json")
	
	@PostMapping("/courses")
	
	@CrossOrigin(origins = "*")
	public Course addCourse(@RequestBody Course course) {
		
		return this.courseService.addCourse(course);
		
	}
	
	//update course using PUT request
	@PutMapping("/courses")
	@CrossOrigin(origins = "*")
	public Course updateCourse(@RequestBody Course course) {
		return  this.courseService.updateCourse(course);
	}
	
	//delete the courses
	@DeleteMapping("/courses/{courseId}")
	@CrossOrigin(origins = "*")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
