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
import { UKPostCode } from './uKPostCode';


export interface UKPostCodeConstraintAllOf {
    /**
     * The zoneCodes
     */
    zoneCodes?: Array<UKPostCode>;
    /**
     * The typeName of the object
     */
    _?: UKPostCodeConstraintAllOf.UEnum;
}
export namespace UKPostCodeConstraintAllOf {
    export type UEnum = 'UKPostCodeConstraint';
    export const UEnum = {
        UkPostCodeConstraint: 'UKPostCodeConstraint' as UEnum
    };
}


