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
 * The node violations, like late
 */
export interface JOptViolation { 
    /**
     * The value of the violation
     */
    value: string;
    /**
     * The description of the violation
     */
    desc: string;
    /**
     * The category of the violation
     */
    category: string;
    /**
     * The attribute of the violation
     */
    attribute: string;
    /**
     * The sub-attribute of the violation
     */
    subAttribute: string;
    /**
     * The unique error code
     */
    code: number;
}

