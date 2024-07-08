import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RecordatorioMedicamentoPage } from './recordatorio-medicamento.page';
import { ReminderService } from '../../services/reminder.service';
import { Storage } from '@ionic/storage-angular';
import { StorageMock } from '../../testing/mocks'; // Asegúrate de ajustar la ruta según la estructura
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecordatorioMedicamentoPage', () => {
  let component: RecordatorioMedicamentoPage;
  let fixture: ComponentFixture<RecordatorioMedicamentoPage>;
  let reminderService: jasmine.SpyObj<ReminderService>;
  let router: Router;

  beforeEach(async () => {
    const reminderSpy = jasmine.createSpyObj('ReminderService', ['addReminder']);

    await TestBed.configureTestingModule({
      declarations: [RecordatorioMedicamentoPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: ReminderService, useValue: reminderSpy },
        { provide: Storage, useClass: StorageMock }
      ]
    }).compileComponents();

    reminderService = TestBed.inject(ReminderService) as jasmine.SpyObj<ReminderService>;
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioMedicamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a reminder and navigate to home', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.reminder = { name: 'Paracetamol', time: '10:00' };

    reminderService.addReminder.and.returnValue(Promise.resolve());

    await component.addReminder();

    expect(reminderService.addReminder).toHaveBeenCalledWith(component.reminder);
    expect(component.reminder.name).toBe('');
    expect(component.reminder.time).toBe('');
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });

  // Agrega más pruebas según sea necesario
});
