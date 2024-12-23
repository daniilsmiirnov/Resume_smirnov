package com.dansmirnov.resume.model;

public class ResumeModel {
    private String name;
    private String surname;
    private String phone;
    private String email;


    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public ResumeModel() {
        this.name = "Даниил";
        this.surname = "Смирнов";
        this.phone = "+7(923)377-00-00";
        this.email = "dan_smirnov@mail.com";
    }


    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getSurname() {
        return surname;
    }
}
