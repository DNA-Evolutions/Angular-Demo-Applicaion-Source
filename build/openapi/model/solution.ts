/**
 * DNA Evolutions - JOpt.TourOptimizer
 * This is DNA\'s JOpt.TourOptimizer service. A RESTful Spring Boot application using springdoc-openapi and OpenAPI 3. JOpt.TourOptimizer is a service that delivers route optimization and automatic scheduling features to be easily integrated into any third-party application. JOpt.TourOptimizer encapsulates all necessary optimization functionality and provides a comprehensive REST API that offers a domain-specific optimization interface for the transportation industry. The service is stateless and does not come with graphical user interfaces, map depiction or any databases. These extensions and adjustments are supposed to be introduced by the consumer of the service while integrating it into his/her own application. The service will allow for many suitable adjustments and user-specific settings to adjust the behaviour and optimization goals (e.g. minimizing distance, maximizing resource utilization, etc.) through a comprehensive set of functions. This will enable you to gain control of the complete optimization processes.This service is based on JOpt (7.5.1-rc3-j17-SNAPSHOT)
 *
 * The version of the OpenAPI document: unknown
 * Contact: info@dna-evolutions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SolutionHeader } from './solutionHeader';
import { OptimizationStatus } from './optimizationStatus';
import { Route } from './route';


/**
 * The solution. Either provided by the library or by the user and used as starting solution for the optimization run
 */
export interface Solution { 
    optimizationStatus?: OptimizationStatus;
    /**
     * An id created by the system that can be used for unique identification
     */
    id?: string;
    /**
     * A timestamp the Snapshot was created that will automatically filled out, if neccessary
     */
    createdTimeStamp?: number;
    /**
     * An id related to the creator that is filled out autmatically
     */
    creator?: string;
    /**
     * An optional title/ident inhertited from the OptimizationCondig.
     */
    ident?: string;
    header?: SolutionHeader;
    /**
     * The routes of the solution.
     */
    routes: Array<Route>;
}

