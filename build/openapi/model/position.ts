/**
 * DNA Evolutions - JOpt.TourOptimizer
 * This is DNA\'s JOpt.TourOptimizer service. A RESTful Spring Boot application using springdoc-openapi and OpenAPI 3.
 *
 * The version of the OpenAPI document: unknown
 * Contact: info@dna-evolutions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GeoAddress } from './geoAddress';


/**
 * The destinationPosition. If set, the Resource will finish its Route a the alternate destination position. However, the next workinghour the Resource will start at its original start location no matter where the alternate destination (of the previous hour) is located.
 */
export interface Position { 
    /**
     * The latitude of the position
     */
    latitude: number;
    /**
     * The longitude of the position
     */
    longitude: number;
    geoAddress?: GeoAddress;
}

