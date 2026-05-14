package com.fs.openapi;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

public class RestApplication extends Application {

    @Override
    public Set<Class<?>> getClasses() {

        Set<Class<?>> resources = new HashSet<>();

        resources.add(SecureApi.class);   // register REST class here

        return resources;
    }
}