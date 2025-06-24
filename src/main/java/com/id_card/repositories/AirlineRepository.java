package com.id_card.repositories;


import com.id_card.models.Airline;

import java.util.List;

public interface AirlineRepository {
    Airline findById(String id);

    Airline save(Airline airline);

    Airline update(String id, Airline airline);

    void delete(String id);

    List<Airline> findAll(int limit, int offset);

    List<Airline> findByCountry(String country, int limit, int offset);

    List<Airline> findByDestinationAirport(String destinationAirport, int limit, int offset);
}
