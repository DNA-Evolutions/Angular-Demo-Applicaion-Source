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
import { JOptBindingResourceConstraint } from './jOptBindingResourceConstraint';
import { JOptExcludingResourceConstraint } from './jOptExcludingResourceConstraint';


/**
 * The constraint for the node
 */
export interface JOptConstraint { 
    /**
     * The list of binding resource constraints
     */
    bindingResources: Array<JOptBindingResourceConstraint>;
    /**
     * The list of excluding resource constraints
     */
    excludingResources: Array<JOptExcludingResourceConstraint>;
}

