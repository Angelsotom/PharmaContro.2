import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CimaApiService } from './cima-api-service';

describe('CimaApiService', () => {
  let service: CimaApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CimaApiService]
    });
    service = TestBed.inject(CimaApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

 

  it('should fetch medicamentos', () => {
    const dummyMedicamentos = {
      resultados: [
        { nregistro: '123', nombre: 'Aspirina' },
        { nregistro: '456', nombre: 'Paracetamol' }
      ]
    };


  it('should fetch medicamento details', () => {
    const dummyMedicamento = {
      nregistro: '123',
      nombre: 'Aspirina',
      descripcion: 'Pain reliever'
    };});




  });

  // Agrega más pruebas según sea necesario
});
