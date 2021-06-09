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
import { EdgeElementConnectionAllOfTimeUnits } from './edgeElementConnectionAllOfTimeUnits';


/**
 * The maximal time a Resource should work within the WorkingHour.
 */
export interface WorkingHoursMaxTime { 
    seconds?: number;
    zero?: boolean;
    negative?: boolean;
    nano?: number;
    units?: Array<EdgeElementConnectionAllOfTimeUnits>;
}

