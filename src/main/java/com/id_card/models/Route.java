package com.id_card.models;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Route {

    @NotBlank(message = "ID is mandatory")
    private String id;

    @NotBlank(message = "Type is mandatory")
    private String type;

    @NotBlank(message = "Airline is mandatory")
    private String airline;

    @NotBlank(message = "Airline ID is mandatory")
    private String airlineid;

    @NotBlank(message = "Source airport is mandatory")
    private String sourceairport;

    @NotBlank(message = "Destination airport is mandatory")
    private String destinationairport;

    @NotNull(message = "Stops is mandatory")
    private int stops;

    @NotBlank(message = "Equipment is mandatory")
    private String equipment;

    @Valid
    private List<Schedule> schedule;

    @NotNull(message = "Distance is mandatory")
    private double distance;

    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    @Builder
    public static class Schedule {

        @Min(0)
        @Max(6)
        @NotNull(message = "Day is mandatory")
        private int day;

        @NotBlank(message = "Flight is mandatory")
        private String flight;

        @NotBlank(message = "UTC is mandatory")
        private String utc;

    }
}
