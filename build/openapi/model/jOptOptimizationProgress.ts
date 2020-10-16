/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * JOptOptimizationProgress model for the documentation
 */
export interface JOptOptimizationProgress { 
    /**
     * The id of the currently running optimization algorithm
     */
    callerId: string;
    /**
     * The progress in percentage of the currently running optimization algorithm
     */
    curProgress: number;
    /**
     * The stage of the optimization. The first running algorithm will get the stage 0.
     */
    stage: number;
    /**
     * The progress as humand readable description
     */
    desc: string;
}

