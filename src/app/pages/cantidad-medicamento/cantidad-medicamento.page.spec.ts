import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { CantidadMedicamentoPage } from './cantidad-medicamento.page';
import { Router } from '@angular/router';

describe('CantidadMedicamentoPage', () => {
  let component: CantidadMedicamentoPage;
  let fixture: ComponentFixture<CantidadMedicamentoPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantidadMedicamentoPage],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadMedicamentoPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list of medicines', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('ion-item').length).toBe(3);
    expect(compiled.querySelector('ion-item:first-child ion-label h2').textContent).toContain('Paracetamol');
    expect(compiled.querySelector('ion-item:first-child ion-label p').textContent).toContain('Quedan: 20');
  });

  it('should navigate to home page', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    const button = fixture.nativeElement.querySelector('ion-button:first-child');
    button.click();
    await fixture.whenStable();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should navigate to perfil page', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    const button = fixture.nativeElement.querySelectorAll('ion-button')[1];
    button.click();
    await fixture.whenStable();
    expect(router.navigate).toHaveBeenCalledWith(['/perfil']);
  });

  it('should navigate to recordatorio-medicamento page', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    const button = fixture.nativeElement.querySelectorAll('ion-button')[2];
    button.click();
    await fixture.whenStable();
    expect(router.navigate).toHaveBeenCalledWith(['/recordatorio-medicamento']);
  });

  it('should navigate to recordatoriodeotraspersonasomascotas page', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    const button = fixture.nativeElement.querySelectorAll('ion-button')[3];
    button.click();
    await fixture.whenStable();
    expect(router.navigate).toHaveBeenCalledWith(['/recordatoriodeotraspersonasomascotas']);
  });
});

