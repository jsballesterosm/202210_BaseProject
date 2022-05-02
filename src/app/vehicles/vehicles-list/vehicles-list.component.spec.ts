import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { VehiclesListComponent } from './vehicles-list.component';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesService } from '../vehicles.service';
import { Vehicles } from '../vehicles';
import { By } from '@angular/platform-browser';

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiclesListComponent ],
      providers: [ VehiclesService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;

    let vehicles: Vehicles[] = [
      new Vehicles(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Vehicles(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Vehicles(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    ];

    component.vehicles = vehicles;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have count rows + header equal to items array + 1', () => {
    const cantidaHeader = 1;
     expect(debug.queryAll(By.css('tr')).length).toEqual(
        component.vehicles.length + cantidaHeader
     );
   });
});
