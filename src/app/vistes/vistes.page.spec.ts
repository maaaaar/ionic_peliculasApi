import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistesPage } from './vistes.page';

describe('VistesPage', () => {
  let component: VistesPage;
  let fixture: ComponentFixture<VistesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
