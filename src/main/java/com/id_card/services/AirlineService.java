package com.id_card.services;

import com.id_card.models.Airline;

import java.util.List;

public interface AirlineService {
    Airline getAirlineById(String id);

    Airline createAirline(Airline airline);

    Airline updateAirline(String id, Airline airline);

    void deleteAirline(String id);

    List<Airline> listAirlines(int limit, int offset);

    List<Airline> listAirlinesByCountry(String country, int limit, int offset);

    List<Airline> listAirlinesByDestinationAirport(String destinationAirport, int limit, int offset);
}
