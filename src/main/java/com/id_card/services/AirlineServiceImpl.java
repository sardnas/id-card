package com.id_card.services;

import com.id_card.models.Airline;
import com.id_card.repositories.AirlineRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirlineServiceImpl implements AirlineService {

    private final AirlineRepository airlineRepository;

    public AirlineServiceImpl(AirlineRepository airlineRepository) {
        this.airlineRepository = airlineRepository;
    }

    @Override
    public Airline getAirlineById(String id) {
        return airlineRepository.findById(id);
    }

    @Override
    public Airline createAirline(Airline airline) {
        return airlineRepository.save(airline);
    }

    @Override
    public Airline updateAirline(String id, Airline airline) {
        return airlineRepository.update(id, airline);
    }

    @Override
    public void deleteAirline(String id) {
        airlineRepository.delete(id);
    }

    @Override
    public List<Airline> listAirlines(int limit, int offset) {
        return airlineRepository.findAll(limit, offset);
    }

    @Override
    public List<Airline> listAirlinesByCountry(String country, int limit, int offset) {
        return airlineRepository.findByCountry(country, limit, offset);
    }

    @Override
    public List<Airline> listAirlinesByDestinationAirport(String destinationAirport, int limit, int offset) {
        return airlineRepository.findByDestinationAirport(destinationAirport, limit, offset);
    }

}
