import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ApiService } from '../util/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe.skip('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockNavigateByUrl = jest.fn();
  const mockRouter = jest.mock('@angular/router', () => ({
    navigateByUrl: mockNavigateByUrl,
  }));

  const apiService: ApiService = new ApiService(null);
  const spyUserService: UserService = new UserService(apiService);
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: UserService, useValue: spyUserService },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
