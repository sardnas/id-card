package com.id_card.repositories;


import com.id_card.models.Route;

import java.util.List;

public interface RouteRepository {
    Route findById(String id);

    Route save(Route route);

    Route update(String id, Route route);

    void delete(String id);

    List<Route> findAll(int limit, int offset);

}
