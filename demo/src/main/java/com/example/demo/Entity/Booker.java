package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Entity
@Table(name="Records")
public class Booker {

    @Id
    @Column(name="idInfo")
    private String idInfo;

    @Column(name="dateOfBirth")
    private String dateOfBirth;

    @Column(name="fullName")
    private String fullName;

    @Column(name="contactInfo")
    private String contactInfo;

    @Column(name="address")
    private String address;

    @Enumerated(EnumType.STRING)
    @Column(name="roomType")
    private RoomType roomType;

    @Column(name="dateIn")
    private String dateIn;

    @Column(name="dateOut")
    private String dateOut;

    @Column(name="nightsSpent")
    private int nightsSpent;

    @Column(name="amountToPay")
    private double amountToPay;

    public void calculateNightsAndAmount() {
        LocalDate checkInDate = LocalDate.parse(dateIn);
        LocalDate checkOutDate = LocalDate.parse(dateOut);

        this.nightsSpent = (int) ChronoUnit.DAYS.between(checkInDate, checkOutDate);

        double pricePerNight = getRoomPricePerNight();
        this.amountToPay = nightsSpent * pricePerNight;
    }

    private double getRoomPricePerNight() {
        switch (roomType) {
            case S1: return 100.0;
            case S2: return 120.0;
            case D1: return 150.0;
            case D2: return 170.0;
            case E1: return 200.0;
            case E2: return 220.0;
            case F3: return 250.0;
            case F4: return 300.0;
            default: return 0.0;
        }
    }

    public String getIdInfo() {
        return idInfo;
    }

    public void setIdInfo(String idInfo) {
        this.idInfo = idInfo;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }

    public String getDateIn() {
        return dateIn;
    }

    public void setDateIn(String dateIn) {
        this.dateIn = dateIn;
    }

    public String getDateOut() {
        return dateOut;
    }

    public void setDateOut(String dateOut) {
        this.dateOut = dateOut;
    }

    public int getNightsSpent() {
        return nightsSpent;
    }

    public void setNightsSpent(int nightsSpent) {
        this.nightsSpent = nightsSpent;
    }

    public double getAmountToPay() {
        return amountToPay;
    }

    public void setAmountToPay(double amountToPay) {
        this.amountToPay = amountToPay;
    }
}

// Enum for RoomType
enum RoomType {
    S1, S2, D1, D2, E1, E2, F3, F4;
}
