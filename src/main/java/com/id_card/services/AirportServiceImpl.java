package com.id_card.services;

import com.id_card.models.Airport;
import com.id_card.models.Route;
import com.id_card.repositories.AirportRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportServiceImpl implements AirportService {

    private final AirportRepository airportRepository;

    public AirportServiceImpl(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }

    @Override
    public Airport getAirportById(String id) {
        return airportRepository.findById(id);
    }

    @Override
    public Airport createAirport(Airport airport) {
        return airportRepository.save(airport);
    }

    @Override
    public Airport updateAirport(String id, Airport airport) {
        return airportRepository.update(id, airport);
    }

    @Override
    public void deleteAirport(String id) {
        airportRepository.delete(id);
    }

    @Override
    public List<Airport> listAirports(int limit, int offset) {
        return airportRepository.findAll(limit, offset);
    }

    @Override
    public List<Route> listDirectConnections(String airportCode, int limit, int offset) {
        return airportRepository.findDirectConnections(airportCode, limit, offset);
    }

}
