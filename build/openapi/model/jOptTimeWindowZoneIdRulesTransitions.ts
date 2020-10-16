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
import { JOptTimeWindowZoneIdRulesStandardOffset } from './jOptTimeWindowZoneIdRulesStandardOffset';
import { JOptTimeWindowZoneIdRulesDuration } from './jOptTimeWindowZoneIdRulesDuration';


export interface JOptTimeWindowZoneIdRulesTransitions { 
    offsetBefore?: JOptTimeWindowZoneIdRulesStandardOffset;
    offsetAfter?: JOptTimeWindowZoneIdRulesStandardOffset;
    duration?: JOptTimeWindowZoneIdRulesDuration;
    gap?: boolean;
    overlap?: boolean;
    dateTimeAfter?: string;
    instant?: string;
    dateTimeBefore?: string;
}

