import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { DbService } from '../../services/bd.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLiteMock } from '../../testing/mocks'; // Asegúrate de ajustar la ruta según la estructura

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot()],
      providers: [
        DbService,
        { provide: SQLite, useClass: SQLiteMock } // Proporciona un mock para SQLite
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  // Agrega más pruebas según sea necesario
});
