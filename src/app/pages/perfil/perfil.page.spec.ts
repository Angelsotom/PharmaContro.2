import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PerfilPage } from './perfil.page';
import { DbService } from '../../services/bd.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLiteMock } from '../../testing/mocks';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot()],
      providers: [
        DbService,
        { provide: SQLite, useClass: SQLiteMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
