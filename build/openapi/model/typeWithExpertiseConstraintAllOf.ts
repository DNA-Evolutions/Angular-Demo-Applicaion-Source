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
import { TypeWithExpertise } from './typeWithExpertise';


export interface TypeWithExpertiseConstraintAllOf { 
    /**
     * The types with expertise
     */
    typesWithExpertise?: Array<TypeWithExpertise>;
    /**
     * The cost model for matching the expertise.
     */
    costModel?: TypeWithExpertiseConstraintAllOf.CostModelEnum;
    /**
     * The typeName of the object
     */
    typeName?: string;
}
export namespace TypeWithExpertiseConstraintAllOf {
    export type CostModelEnum = 'PENALIZE_MATCHING_SKILL_HIGH_DELTA' | 'PENALIZE_MATCHING_SKILL_LOW_DELTA' | 'NO_PENALIZE_MATCHING_SKILL';
    export const CostModelEnum = {
        PenalizeMatchingSkillHighDelta: 'PENALIZE_MATCHING_SKILL_HIGH_DELTA' as CostModelEnum,
        PenalizeMatchingSkillLowDelta: 'PENALIZE_MATCHING_SKILL_LOW_DELTA' as CostModelEnum,
        NoPenalizeMatchingSkill: 'NO_PENALIZE_MATCHING_SKILL' as CostModelEnum
    };
}


