import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { DbService } from '../../services/bd.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLiteMock } from '../../testing/mocks';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()],
      providers: [
        DbService,
        { provide: SQLite, useClass: SQLiteMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
