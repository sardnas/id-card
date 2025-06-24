package com.id_card.services;


import com.id_card.models.Route;

import java.util.List;

public interface RouteService {

    Route getRouteById(String id);

    Route createRoute(Route route);

    Route updateRoute(String id, Route route);

    void deleteRoute(String id);

    List<Route> listRoutes(int limit, int offset);
}
