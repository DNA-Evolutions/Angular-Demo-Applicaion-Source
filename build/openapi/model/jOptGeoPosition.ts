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
import { JOptGeoAddress } from './jOptGeoAddress';
import { JOptGeoCoordinate } from './jOptGeoCoordinate';


/**
 * The positon of the resource when starting
 */
export interface JOptGeoPosition { 
    /**
     * The current location index
     */
    locationIndex?: number;
    /**
     * The id of the position, can be the element id itself
     */
    id?: string;
    geoCoordinate?: JOptGeoCoordinate;
    address?: JOptGeoAddress;
}

