import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

import { RestOptimization } from '@openapibuild/openapi';

/*const iconRetinaUrl = 'assets/maps/marker-icon-2x.png';
const iconUrl = 'assets/maps/marker-icon-green.png';
const shadowUrl = 'assets/maps/marker-shadow.png';

const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;*/

import { GeoAndRoutingService } from 'src/app/_services/geo-and-routing/geo-and-routing.service';
import { LeafletMarkerService } from 'src/app/_services/leaflet-map/marker/leaflet-marker.service';
import { MapViewDefinition } from 'src/app/_services/leaflet-map/interface/map-view-defintion';
import { MatDialog } from '@angular/material/dialog';
import { LeafletPolylineService } from 'src/app/_services/leaflet-map/polyline/leaflet-polyline.service';
import { OptimizationWrapperService } from 'src/app/_services/optimization-wrapper/optimization-wrapper.service';

import { MapIconResourceOptions } from './marker-icon/map-icon-resource-options';
import { MapIconNodeOptions } from './marker-icon/map-icon-node-options';
import { MapIconEventOptions } from './marker-icon/map-icon-event-options';
import { MapIconPillarOptions } from './marker-icon/map-icon-pillar-options';
import { Observable } from 'rxjs';
import { OptimizationResultDialogComponent } from '../optimization-elements/result/optimization/optimization-result/opti-result-dialog.component';
import { EventHandler } from './interface/event-handler';
import { OptimizationNonGeoElementsSelectorComponent } from '../optimization-elements-selector/optimization-non-geo-elements-selector.component';

/**
 * The component for the Leafletmap
 *
 * @export
 * @class LeafletMapComponent
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Component({
    selector: 'app-leaflet-map',
    templateUrl: './leaflet-map.component.html',
    styleUrls: ['./leaflet-map.component.scss'],
    standalone: false
})
export class LeafletMapComponent implements AfterViewInit, OnDestroy {
  private map: any;
  private mapViewDef: MapViewDefinition;
  private tiles: any;
  public mcText: string;

  public isFullScreenMap = false;

  public hasNodeEvents = false;

  protected onMouseMoveHandler: EventHandler;

  myOptimizationOutput$: Observable<RestOptimization>;

  /**
   * Creates an instance of LeafletMapComponent.
   *
   * @param {LeafletMarkerService} markerService
   * @param {GeoAndRoutingService} geoService
   * @param {ElementRef} elementRef
   * @param {LeafletPolylineService} polylineService
   * @param {OptimizationWrapperService} optiService
   * @param {MatDialog} dialog
   * @memberof LeafletMapComponent
   */
  constructor(
    private markerService: LeafletMarkerService,
    private geoService: GeoAndRoutingService,
    private elementRef: ElementRef,
    private polylineService: LeafletPolylineService,
    private optiService: OptimizationWrapperService,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {
    this.onMouseMoveHandler = (evt: any) => this.onMapMouseMove(evt);
    this.myOptimizationOutput$ = this.optiService.optimizationOutputObservable();
  }

  /**
   *
   *
   * @memberof LeafletMapComponent
   */
  ngAfterViewInit(): void {
    this.initMap();
    this.initMapHandlers();

    this.myOptimizationOutput$.subscribe((result: RestOptimization) => {
      // Drawing result
      this.refreshMap(result);
      result.solution.routes.forEach((r, index) => {
        this.polylineService.drawRouteResultPolyline(
          r,
          index,
          this.elementRef,
          this.map,
          result
        );
      });
    });

    this.optiService.getRefreshObservable().subscribe((result: boolean) => {
      if (result) {
        this.refreshMapCenter();
        this.refreshMap();
      }
    });
  }

  /**
   * Handler for showing map info (lat, lon of cursor and zoom level of map)
   *
   * @protected
   * @memberof LeafletMapComponent
   */
  protected initMapHandlers(): void {
    this.map.on('mousemove', this.onMouseMoveHandler);
  }


  public refreshMap(restOptimization?: RestOptimization): void {
    this.map.eachLayer((curLayer) => {
      if (curLayer !== this.tiles) {
        this.map.removeLayer(curLayer);
      }
    });

    if(restOptimization == undefined){
      restOptimization = this.optiService.optimizationOutput();
    }

    this.addMarksers(restOptimization);
  }

  /**
   *
   * Move/zoom map to predefined position
   *
   * @memberof LeafletMapComponent
   */
  public refreshMapCenter(): void {
    const mapViewDef = this.geoService.mapViewDef();

    this.map.setView(mapViewDef.center, mapViewDef.zoom, { animation: true });
  }

  public getMap(): L.map{
    return this.map;
  }

  public getElementRef():ElementRef{
    return this.elementRef;
  }


  private addMarksers(result?: RestOptimization): void {

    const iconNode = L.icon({
      iconUrl: MapIconNodeOptions.mapIcon,
      iconSize: MapIconNodeOptions.iconSize,
      iconAnchor: MapIconNodeOptions.iconAnchor,
      shadowUrl: MapIconNodeOptions.mapShadowIcon,
      shadowSize: MapIconNodeOptions.shadowSize,
      shadowAnchor: MapIconNodeOptions.shadowAnchor,
    });

    const iconEvent = L.icon({
      iconUrl: MapIconEventOptions.mapIcon,
      iconSize: MapIconEventOptions.iconSize,
      iconAnchor: MapIconEventOptions.iconAnchor,
      shadowUrl: MapIconEventOptions.mapShadowIcon,
      shadowSize: MapIconEventOptions.shadowSize,
      shadowAnchor: MapIconEventOptions.shadowAnchor,
    });

    const iconPillar = L.icon({
      iconUrl: MapIconPillarOptions.mapIcon,
      iconSize: MapIconPillarOptions.iconSize,
      iconAnchor: MapIconPillarOptions.iconAnchor,
      shadowUrl: MapIconPillarOptions.mapShadowIcon,
      shadowSize: MapIconPillarOptions.shadowSize,
      shadowAnchor: MapIconPillarOptions.shadowAnchor,
    });

    const iconResource = L.icon({
      iconUrl: MapIconResourceOptions.mapIcon,
      iconSize: MapIconResourceOptions.iconSize,
      iconAnchor: MapIconResourceOptions.iconAnchor,
      shadowUrl: MapIconResourceOptions.mapShadowIcon,
      shadowSize: MapIconResourceOptions.shadowSize,
      shadowAnchor: MapIconResourceOptions.shadowAnchor,
    });

    const isDraggableNode = this.geoService.exampleHasDraggableNode();
    const isDraggableResource = this.geoService.exampleHasDraggableResource();

    this.markerService.markNodes(this, iconNode, iconEvent, iconPillar, isDraggableNode, result);
    this.markerService.markResources(this.map, this.elementRef, iconResource, isDraggableResource);
  }

  /**
   *
   *
   * @private
   * @memberof LeafletMapComponent
   */
  private initMap(): void {
    this.mapViewDef = this.geoService.mapViewDef();

    this.map = L.map('map', {
      center: this.mapViewDef.center,
      zoom: this.mapViewDef.zoom,
    });

    this.tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    this.tiles.addTo(this.map);

    this.addMarksers();
  }

  /**
   *
   *
   * @protected
   * @param {*} evt
   * @memberof LeafletMapComponent
   */
  protected onMapMouseMove(evt: any): void {
    // Lat and Long are embedded in the event object
    const lat: string = evt.latlng.lat.toFixed(3);
    const long: string = evt.latlng.lng.toFixed(3);
    const zoom: string = this.map.getZoom();
    this.mcText = `Latitude: ${lat} &nbsp; &nbsp; Longitude: ${long} &nbsp; Zoom: ${zoom}`;
  }

  /**
   *
   *
   * @memberof LeafletMapComponent
   */
  public ngOnDestroy(): void {
    this.map.off('mousemove', this.onMouseMoveHandler);
  }

  /**
   * Opens the last result of the optimizer
   *
   * @param {JOptOptimizationOutput} output
   * @memberof LeafletMapComponent
   */
  openOptimizationResultDialog(output: RestOptimization): void {
    //console.log(output);
    const dialogRef = this.dialog.open(OptimizationResultDialogComponent, {
      minWidth: '40vw',
      maxWidth: '95vw',
      maxHeight: '85vh',
      data: { result: output },
    });

    dialogRef.afterClosed().subscribe(() => {
      //
    });
  }

  openNonGeoEventsDialog(): void {
    const dialogRef = this.dialog.open(OptimizationNonGeoElementsSelectorComponent, {
      minWidth: '10vw',
      maxWidth: '95vw',
      maxHeight: '85vh',
      disableClose: false,
      data: {  },
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  /**
   *
   *
   * @return {*}  {boolean}
   * @memberof LeafletMapComponent
   */
  public isFullScreen(): boolean {
    return this.isFullScreenMap;
  }

  public hasEventNodes(): boolean {
    return this.hasNodeEvents;
  }

  public setHasEventNodes(hasEventNodes: boolean): void {
    this.cdRef.detectChanges();
    this.hasNodeEvents = hasEventNodes;
  }

  /**
   *
   *
   * @memberof LeafletMapComponent
   */
  public toggleFullScreenMap(): void {
    this.isFullScreenMap = !this.isFullScreenMap;
    window.dispatchEvent(new Event('resize'));
  }

  /**
   * Invalidates the map, to allow a redrawing of tiles after fullscreen was enabled/disabled
   *
   * @memberof LeafletMapComponent
   */
  public invalidateMapSize(): void {
    this.map.invalidateSize();
  }

  /**
   *
   *
   * @param {*} event
   * @memberof LeafletMapComponent
   */
  onResize(event) {
    //console.log('resize');
    event.target.innerWidth;
    this.map.invalidateSize();
  }
}

export const getCurrentOffset = (map: any): { x: number; y: number } => {
  const layerCorner: L.Point = map.getPixelOrigin();
  const mapCorner: L.Point = map.getPixelBounds().min;

  let xVal = 0;
  let yVal = 0;

  if (!layerCorner.equals(mapCorner)) {
    xVal = layerCorner.x - mapCorner.x;
    yVal = layerCorner.y - mapCorner.y;
  }

  return { x: xVal, y: yVal };
};
