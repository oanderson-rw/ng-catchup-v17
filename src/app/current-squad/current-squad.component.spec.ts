import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSquadComponent } from './current-squad.component';

describe('CurrentSquadComponent', () => {
  let component: CurrentSquadComponent;
  let fixture: ComponentFixture<CurrentSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSquadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
