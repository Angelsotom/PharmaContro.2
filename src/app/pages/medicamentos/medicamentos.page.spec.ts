import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { MedicamentosPage } from './medicamentos.page';
import { CimaApiService } from '../../services/cima-api-service';
import { of } from 'rxjs';

describe('MedicamentosPage', () => {
  let component: MedicamentosPage;
  let fixture: ComponentFixture<MedicamentosPage>;
  let cimaService: CimaApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicamentosPage],
      imports: [HttpClientTestingModule, IonicModule.forRoot()],
      providers: [CimaApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentosPage);
    component = fixture.componentInstance;
    cimaService = TestBed.inject(CimaApiService);
  });



  it('should fetch medicamentos on init', () => {
    const dummyMedicamentos = {
      resultados: [
        { nregistro: '123', nombre: 'Aspirina' },
        { nregistro: '456', nombre: 'Paracetamol' }
      ]
    };

    spyOn(cimaService, 'getMedicamentos').and.returnValue(of(dummyMedicamentos));

    component.ngOnInit();

    });

  // Agrega más pruebas según sea necesario
});
