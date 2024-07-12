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


/**
 * The settings/defintion for the reduction time at the start of the route for non-pillar nodes. A reduction times allows the Resource to start working/driving before the actual official workingHours start. For example, a customer node opens at 8 in the morning and the resource needs 25 minutes to drive to the node. The official workingHour of the Resource start at 8 as well. By giving a maximal reduction time of, for example, one hour and only allow the reduction time to be used for driving, the Resource will start 25 minutes to earlier to reach the node by 8.
 */
export interface StartReductionTimeDefinition { 
    /**
     * The maximal Routes\' Start Reduction Time for nodes the Optimizer is allowed to use.
     */
    maxRouteStartReductionTime: string;
    /**
     * The boolean isReductionTimeOnlyUsedForDriving defines if a Resource is allowed to use reduction time only for driving to the first node but not for working on it.
     */
    isReductionTimeOnlyUsedForDriving: boolean;
}

