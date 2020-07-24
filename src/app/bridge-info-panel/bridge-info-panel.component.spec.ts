import { TestBed, ComponentFixture } from '@angular/core/testing';

import { BridgeInfoPanelComponent } from './bridge-info-panel.component';
import { Bridge } from '../bridge';

describe('BridgeInfoPanel Component', () => {
  // We'll hold an instance of our BridgeInfoPanelComponent
  let component: BridgeInfoPanelComponent;
  // And a wrapper for our component's environment, for debugging and testing
  let fixture: ComponentFixture<BridgeInfoPanelComponent>;
  // And finally, our component's view's HTML element (i.e., host)
  let el: HTMLElement;
  // An instance of a Bridge
  let bridge: Bridge;

  beforeEach(() => {
    // Isolated testing environment for our component
    TestBed.configureTestingModule({
      declarations: [ BridgeInfoPanelComponent ]
    });

    // Instantiate our component
    fixture = TestBed.createComponent(BridgeInfoPanelComponent);

    // Get the component instance
    component = fixture.componentInstance;

    // Grab a reference to the HTMLElement for this component
    el = fixture.nativeElement;

    // Define a Bridge instance, and use a year from 1 year ago
    const today = new Date();
    const currentYear = today.getFullYear();
    bridge = {
      id: 'bridge-41S-140-C',
      name: 'MOOSE CREEK CULVERT, Hwy. 17',
      lat: 49.815076,
      lng: -92.990691,
      year: currentYear - 1,
      length: 30,
      width: null
    };
  });

  it('should allow creating an instance', () => {
    expect(component).toBeDefined();
  });

  describe('width()', () => {
    it('should give a string formatted width with the given bridge width', () => {
      // Specify a known width
      bridge.width = 10;
      // Set the bridge as @Input on the component
      component.bridge = bridge;
      expect(component.width()).toEqual('10 m');
    });

    it('should give a string `unknown` when bridge width is null', () => {
      // Specify a known width
      bridge.width = null;
      // Set the bridge as @Input on the component
      component.bridge = bridge;
      expect(component.width()).toEqual('unknown');
    });
  });

  describe('length()', () => {
    it('should give a string formatted length with the given bridge length', () => {
      // Specify a known length
      bridge.length = 10;
      // Set the bridge as @Input on the component
      component.bridge = bridge;
      expect(component.length()).toEqual('10 m');
    });

    it('should give a string `unknown` when bridge length is null', () => {
      // Specify a known length
      bridge.length = null;
      // Set the bridge as @Input on the component
      component.bridge = bridge;
      expect(component.length()).toEqual('unknown');
    });
  });

  describe('age()', () => {
    it('should calculate the correct age of the bridge in years', () => {
      component.bridge = bridge;
      expect(component.age()).toEqual(1);
    });
  });

  describe('Template', () => {
    it('should include the bridge name in titlecase', () => {
      bridge.name = 'bRiDGe NaME';
      component.bridge = bridge;

      // wait for bridge @Input to get updated in the view
      fixture.detectChanges();

      const h2 = el.querySelector('h2');
      expect(h2.textContent).toEqual('Bridge Name');
    });

    it('should include the bridge year and age info', () => {
      // <div class="year">Year: {{ bridge.year }} ({{ age() }} years)</div>
      component.bridge = bridge;
      fixture.detectChanges();

      const div = el.querySelector('.year');
      expect(div.textContent).toEqual(
        `Year: ${bridge.year} (1 years)`
      );
    });

    // Similar tests for width() and length(), so just write them once
    ['Width', 'Length'].forEach(name => {
      const nameLower = name.toLowerCase();

      describe(`${nameLower}()`, () => {
        it(`should include the ${nameLower} properly formatted as a number`, () => {
          bridge[nameLower] = 10;
          component.bridge = bridge;
          fixture.detectChanges();

          const div = el.querySelector(`.${nameLower}`);
          expect(div.textContent).toEqual(`${name}: 10 m`);
        });

        it(`should include the ${nameLower} as "unknown" when missing`, () => {
          bridge[nameLower] = null;
          component.bridge = bridge;
          fixture.detectChanges();

          const div = el.querySelector(`.${nameLower}`);
          expect(div.textContent).toEqual(`${name}: unknown`);
        });
      });
    });
  });
});
