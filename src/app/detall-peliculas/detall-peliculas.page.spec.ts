import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallPeliculasPage } from './detall-peliculas.page';

describe('DetallPeliculasPage', () => {
  let component: DetallPeliculasPage;
  let fixture: ComponentFixture<DetallPeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallPeliculasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallPeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
