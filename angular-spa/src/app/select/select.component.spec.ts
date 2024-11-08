import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input [value]', () => {
    component.value = 'Toto';

    fixture.detectChanges();

    const hostEl = fixture.nativeElement as HTMLElement;
    expect(hostEl.textContent).toContain('Toto');
  });

  it('should emit (valueChange)', () => {
    component.isMenuOpen = true;
    component.value = 'Toto';
    component.items = ['Toto', 'Titi', 'Tata'];

    const spy = jasmine.createSpy();
    component.valueChange.subscribe(spy);

    component.handleItemClick('Titi');

    expect(spy).toHaveBeenCalledOnceWith('Titi');
  });

  it('should emit (valueChange) with click simulation', () => {
    component.isMenuOpen = true;
    component.value = 'Toto';
    component.items = ['Toto', 'Titi', 'Tata'];

    fixture.detectChanges();

    const spy = jasmine.createSpy();
    component.valueChange.subscribe(spy);

    const hostEl = fixture.nativeElement as HTMLElement;

    hostEl.querySelector('.item:nth-child(2)')?.dispatchEvent(new MouseEvent('click'));

    expect(spy).toHaveBeenCalledOnceWith('Titi');
  });
});
