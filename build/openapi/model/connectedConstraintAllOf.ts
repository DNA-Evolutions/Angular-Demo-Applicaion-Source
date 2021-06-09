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
import { Constraint } from './constraint';


export interface ConnectedConstraintAllOf {
    constraintOne?: Constraint;
    constraintTwo?: Constraint;
    /**
     * The connectionType
     */
    connectionType?: ConnectedConstraintAllOf.ConnectionTypeEnum;
    /**
     * The typeName of the object
     */
    _?: ConnectedConstraintAllOf.UEnum;
}
export namespace ConnectedConstraintAllOf {
    export type ConnectionTypeEnum = 'AND_CONNECTION_TYPE' | 'OR_CONNECTION_TYPE';
    export const ConnectionTypeEnum = {
        AndConnectionType: 'AND_CONNECTION_TYPE' as ConnectionTypeEnum,
        OrConnectionType: 'OR_CONNECTION_TYPE' as ConnectionTypeEnum
    };
    export type UEnum = 'ConnectedConstraint';
    export const UEnum = {
        ConnectedConstraint: 'ConnectedConstraint' as UEnum
    };
}


