/**
 * DNA Evolutions - JOpt.TourOptimizer
 * This is DNA\'s JOpt.TourOptimizer service. A RESTful Spring Boot application using springdoc-openapi and OpenAPI 3. JOpt.TourOpptimizer is a service that delivers route optimization and automatic scheduling features to be easily integrated into any third-party application. JOpt.TourOpptimizer encapsulates all necessary optimization functionality and provides a comprehensive REST API that offers a domain-specific optimization interface for the transportation industry. The service is stateless and does not come with graphical user interfaces, map depiction or any databases. These extensions and adjustments are supposed to be introduced by the consumer of the service while integrating it into his/her own application. The service will allow for many suitable adjustments and user-specific settings to adjust the behaviour and optimization goals (e.g. minimizing distance, maximizing resource utilization, etc.) through a comprehensive set of functions. This will enable you to gain control of the complete optimization processes.This service is based on JOpt (null)
 *
 * The version of the OpenAPI document: 1.2.7-SNAPSHOT
 * Contact: info@dna-evolutions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Violation } from './violation';


/**
 * The header of the solution per route is summarizing important data like number of elements in the route , total time needed for the route etc.
 */
export interface RouteHeader { 
    /**
     * The abstract cost value of the route.
     */
    cost: number;
    /**
     * The time that is needed for the route.
     */
    time: string;
    /**
     * The accumlated idleTime of the route.
     */
    idleTime: string;
    /**
     * The productive time of the route. Productive time is working-time spend at a node.
     */
    prodTime: string;
    /**
     * The tranTime. The summed transit time of the route.
     */
    tranTime: string;
    /**
     * The termiTime. The time taken from the last element to the termination element of the route.
     */
    termiTime: string;
    /**
     * The distance. The summed transit distance of the route.
     */
    distance: string;
    /**
     * The termiDistance. The distance taken from the last element to the termination element of the route.
     */
    termiDistance: string;
    /**
     * The routeViolations. Violations that occur on route level. For example, overtime, overdistance etc.
     */
    routeViolations: Array<Violation>;
    /**
     * The isClosed boolean describes if a Resource has to visit the termination element of the Route. By default, the start element and the termination element of a Route is the Resource itself. In case of a closed route, by default, the Resource returns to its original starting location.
     */
    isClosed: boolean;
    /**
     * The isAlternateDestination boolean. Descibes of the Resource has an alternate destination. The Resource has to end it\'s Route at the alternate destination there but  will start from the original route start again the next working hour.
     */
    isAlternateDestination: boolean;
}

