/**
 * DNA Evolutions - JOpt.TourOptimizer
 * This is DNA\'s JOpt.TourOptimizer service. A RESTful Spring Boot application using springdoc-openapi and OpenAPI 3. JOpt.TourOpptimizer is a service that delivers route optimization and automatic scheduling features to be easily integrated into any third-party application. JOpt.TourOpptimizer encapsulates all necessary optimization functionality and provides a comprehensive REST API that offers a domain-specific optimization interface for the transportation industry. The service is stateless and does not come with graphical user interfaces, map depiction or any databases. These extensions and adjustments are supposed to be introduced by the consumer of the service while integrating it into his/her own application. The service will allow for many suitable adjustments and user-specific settings to adjust the behaviour and optimization goals (e.g. minimizing distance, maximizing resource utilization, etc.) through a comprehensive set of functions. This will enable you to gain control of the complete optimization processes.
 *
 * The version of the OpenAPI document: unknown
 * Contact: info@dna-evolutions.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { WorkingHours } from './workingHours';
import { Qualification } from './qualification';
import { IResourceDepot } from './iResourceDepot';
import { Constraint } from './constraint';
import { Position } from './position';
import { StayOutDefinition } from './stayOutDefinition';
import { ResourceType } from './resourceType';
import { StartReductionTimeDefinition } from './startReductionTimeDefinition';
import { StartReductionTimeIncludeDefinition } from './startReductionTimeIncludeDefinition';
import { StayOutCycleDefinition } from './stayOutCycleDefinition';
import { StartReductionTimePillarDefinition } from './startReductionTimePillarDefinition';


/**
 * The list of resoruces
 */
export interface Resource { 
    /**
     * The unique id of the Resource. It is not possible, to create mutliple elements (also Nodes) with the same id.
     */
    id: string;
    /**
     * The location id can relate a Resouce to the connection of another resource. See also locationId of Node.
     */
    locationId?: string;
    type: ResourceType;
    position: Position;
    /**
     * The list of non-overlapping workingHours.
     */
    workingHours: Array<WorkingHours>;
    /**
     * The maxTime. The maximal time a Resource should work within the WorkingHour. This value is NOT logically coupled to the workingHours. For example, a working hour is defined from 8 in the morning till  5 in the afternoon and the maxTime is defined as 4 hours. In this situation an overime violation will be already  generated  when the Resource works from 8 till 1 (one hour of overtime). As JOpt supports flexible start times, the Resource might work from 12-4 (4 hours => not violation). The workingHour itself should be seen as a frame that is used primarily for matching WokingHours of Resources and OpeningHours of nodes. If no flexTime is used, the Resource will always start working at the beginning of its current working hours.
     */
    maxTime: string;
    /**
     * The maxDistance. The maximal distance a Resource is allowed to drive within a certain working hours.
     */
    maxDistance: string;
    destinationPosition?: Position;
    stayOutDefinition?: StayOutDefinition;
    stayOutCycleDefinition?: StayOutCycleDefinition;
    /**
     * The stayOutPolicyTime
     */
    stayOutPolicyTime?: string;
    /**
     * The stayOutPolicyDistance
     */
    stayOutPolicyDistance?: string;
    /**
     * The capacity
     */
    capacity: Array<number>;
    /**
     * The initialLoad
     */
    initialLoad: Array<number>;
    /**
     * The minDegratedCapacity
     */
    minDegratedCapacity: Array<number>;
    /**
     * The capacityDegPerStop
     */
    capacityDegPerStop: Array<number>;
    startReductionTimeDefinition?: StartReductionTimeDefinition;
    startReductionTimePillarDefinition?: StartReductionTimePillarDefinition;
    startReductionTimeIncludeDefinition?: StartReductionTimeIncludeDefinition;
    /**
     * The local flexible time. In some cases a Resource should start working later compared to what is defined in the working hours. This way idle time can be reduced. The local flex time is the maximum a Resource is allowed to start working later, depending on the Optimization maybe flex time is not or only partially used.
     */
    flexTime?: string;
    /**
     * The postFlexTime
     */
    postFlexTime?: string;
    /**
     * The maxPillarAfterHoursTime
     */
    maxPillarAfterHoursTime?: string;
    /**
     * The maxDriveTimeFirstNode
     */
    maxDriveTimeFirstNode?: string;
    /**
     * The maxDriveDistanceFirstNode
     */
    maxDriveDistanceFirstNode?: string;
    /**
     * The maxDriveTimeLastNode
     */
    maxDriveTimeLastNode?: string;
    /**
     * The maxDriveDistanceLastNode
     */
    maxDriveDistanceLastNode?: string;
    /**
     * The kilometerCost defines how much arbitrary cost arises per kilometer driven.
     */
    kilometerCost?: number;
    /**
     * The hourCost defines how much arbitrary cost arises per hour scheduled (idling, working, driving).
     */
    hourCost?: number;
    /**
     * The fixCost defines an abstract cost that arrises when this node is visited.
     */
    fixCost?: number;
    /**
     * The preWorkDrivingTime.  Use startReductionTimeDefinition instead.
     */
    preWorkDrivingTime?: string;
    /**
     * The skillEfficiencyFactor
     */
    skillEfficiencyFactor?: number;
    /**
     * The acceptableOvertime. By default if nodes are constantly leading to overtime for a resource, at some point they might get unassigned (if AutoFilter is activated). The acceptable overtime assigns a margin to avoid filtering nodes if they lead to overtime below this margin. By defaul the property  \'JoptAutoFilterWorkingHoursExceedMargin\' can be used to globally define this value.
     */
    acceptableOvertime?: string;
    /**
     * The strictOvertime. By default if nodes are constantly leading to overtime for a resource, at some point they might get unassigned (if AutoFilter is activated). The strictOvertime overtime assigns a margin to avoid filtering nodes if they lead to overtime below this margin. By defaul the property  \'JoptAutoFilterWorkingHoursStrictExceedMargin\' can be used to globally define this value. In contrast to acceptable  overtime, the strict overtime is used during the last fitlering step of the AutoFilter (if strict mode is enabled).
     */
    strictOvertime?: string;
    /**
     * The acceptableOverdistance. Like acceptableOvertime for distance.
     */
    acceptableOverdistance?: string;
    /**
     * The strictOverdistance. Like strictOvertime for distance.
     */
    strictOverdistance?: string;
    /**
     * The averageSpeed of the Resource. By default this value is set to be 22[m/s] (79.2[km/h]). This value is mainly used, in case no external node connections are provided.
     */
    averageSpeed?: number;
    /**
     * The qualifications of the Resource.
     */
    qualifications: Array<Qualification>;
    /**
     * The constraints  of the Resource
     */
    constraints?: Array<Constraint>;
    /**
     * The connectionTimeEfficiencyFactor. The default time for passing a connection is devided by this factor. For example, if a connections needs 30 minutes to be passed by default, a Resource with a connectionTimeEfficiencyFactor of 1.5 only needs 20 minutes. By default this factor is one.
     */
    connectionTimeEfficiencyFactor?: number;
    /**
     * The co2emissionFactor.
     */
    co2emissionFactor?: number;
    resourceDepot?: IResourceDepot;
    /**
     * The overallVisitDurationEfficiency. The base duration a Resource spends at a node is devided by this factor. For example, if a node has 30 minutes of visit duration assigned, a Resource with a overallVisitDurationEfficiency of 1.5 only needs 20 minutes. By default this factor is one.
     */
    overallVisitDurationEfficiency?: number;
    /**
     * The isReductionTimeOnlyUsedForDriving. Use startReductionTimeDefinition instead.
     */
    isReductionTimeOnlyUsedForDriving?: boolean;
    /**
     * The isReductionTimeIncludedInTotalWorkingTime. Use StartReductionTimeIncludeDefinition instead
     */
    isReductionTimeIncludedInTotalWorkingTime?: boolean;
}

