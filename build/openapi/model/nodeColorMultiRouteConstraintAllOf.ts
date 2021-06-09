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
import { IntegerMultiConstraintHelperItem } from './integerMultiConstraintHelperItem';
import { NodeColorCapacity } from './nodeColorCapacity';


export interface NodeColorMultiRouteConstraintAllOf {
    mirrorItem?: IntegerMultiConstraintHelperItem;
    /**
     * The nodeColorCapacities
     */
    nodeColorCapacities?: Array<NodeColorCapacity>;
    /**
     * The typeName of the object
     */
    _?: NodeColorMultiRouteConstraintAllOf.UEnum;
}
export namespace NodeColorMultiRouteConstraintAllOf {
    export type UEnum = 'NodeColorMultiRouteConstraint';
    export const UEnum = {
        NodeColorMultiRouteConstraint: 'NodeColorMultiRouteConstraint' as UEnum
    };
}


