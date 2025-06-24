package com.id_card.services;

import com.id_card.models.Airport;
import com.id_card.models.Route;

import java.util.List;

public interface AirportService {

    Airport getAirportById(String id);

    Airport createAirport(Airport airport);

    Airport updateAirport(String id, Airport airport);

    void deleteAirport(String id);

    List<Airport> listAirports(int limit, int offset);

    List<Route> listDirectConnections(String airportCode, int limit, int offset);
}
