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
import { ILoadCapacity } from './iLoadCapacity';


/**
 * The resourceDepot
 */
export interface IResourceDepot {
    items?: Array<ILoadCapacity>;
    depotId?: string;
    capacityUnitMap?: { [key: string]: number; };
    maximalTotalCapacity?: number;
    _?: string;
}

